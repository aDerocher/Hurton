import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useParams } from 'react-router-dom';
import { getOrderHistory } from './../../store/session';
import { addToCart, editCartItem } from './../../store/cart';
import { addWishlistItem } from './../../store/wishlist';
import SBForm from './SBForm';
import './../../styles/item-details.css';


const ItemForm = (item) => {
    const curItem  = item?.item
    // console.log(curItem)
    const dispatch = useDispatch()
    const usersCart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session?.user)
    const usersWishlist = useSelector(state => state.wishlist)
    
    
    useEffect(() => {
        dispatch(getOrderHistory(sessionUser?.id))
    }, [ dispatch ])
    
    
    // handle adding the item to a users wishlist ================
    const addItemToWishlist = (e, item) => {
        e.preventDefault()
        if(!sessionUser){
            alert("you must be logged in to add items to a wishlist!");
            return
        }
        let wl_exists = usersWishlist?.filter((i) => {
            return i.item_id === curItem.id
        })
        if(wl_exists.length > 0){return}
        const formData = {
            user_id: sessionUser.id,
            item_id: curItem.id,
            item_name: item.name,
            item_color: item.color,
            item_gender: item.gender,
            item_size: item.size,
            item_price: item.price,
            item_image: item.image1

        }
        dispatch(addWishlistItem(formData))
    }
    // handle adding an item to the users cart ===============
    const addItemToCart = (e, item) => {
        e.preventDefault()
        let uid = null
        if(sessionUser) uid = sessionUser.id
        const formData = {
            item_id: curItem.id,
            item_name: item.name,
            item_color: item.color,
            item_gender: item.gender,
            item_size: item.size,
            item_price: item.price,
            item_image: item.image1,
            quantity: quantity,
        }
        if (uid) {
            const existingCartItem = usersCart.filter((item)=>{
                if((item.item_id === formData.item_id && item.item_size === formData.item_size) && item.item_color === formData.item_color)
                return true
            })
            if (existingCartItem.length > 0) {
                existingCartItem[0].quantity +=1
                dispatch(editCartItem(existingCartItem[0].id, existingCartItem[0].quantity))
                return
            }
            dispatch(addToCart(formData))
            return
        }
        addToLocalCart(formData)
    }
    // // handle adding an item to the cart that is in local storage (if no session user)
    const addToLocalCart = (data) => {
        let cart = localStorage.getItem('cart');
        if(!cart){
            let cartStorage = window.localStorage;
            cartStorage.setItem('cart', JSON.stringify({}));
            cart = localStorage.getItem('cart');
        }
        console.log(JSON.parse(cart))
        cart = JSON.parse(cart)
        if (cart[`${data.item_id}_${data.item_color}_${data.item_size}`]){
            cart[`${data.item_id}_${data.item_color}_${data.item_size}`].quantity += data.quantity
        } else {
            cart[`${data.item_id}_${data.item_color}_${data.item_size}`] = data
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    const changeDispImage = (e, img) => {
        e.preventDefault()
        setOrigImage(false)
        setDispImage(img)
    }
    // for handling the photo viewer
    const [ origImage, setOrigImage ] = useState(true)
    const [ dispImage, setDispImage ] = useState('')


    const [ quantity, setQuantity ] = useState(1)
    const [ size, setSize ] = useState('M')
    const [ color, setColor ] = useState()

    return (
        <div className='item-details-selection flex-row-cont'>
            <div className='item-deets-imgs flex-col-cont'>
                <img className='imageTile' src={curItem?.image1} onClick={e=>changeDispImage(e,curItem?.image1)}alt='sb' />
                <img className='imageTile' src={curItem?.image2} onClick={e=>changeDispImage(e,curItem?.image2)}alt='sb' />
                <img className='imageTile' src={curItem?.image3} onClick={e=>changeDispImage(e,curItem?.image3)}alt='sb' />
            </div>

            <div className='item-deets-img'>
                { origImage &&
                    <img src={curItem?.image1} alt='sb' />}
                { !origImage &&
                    <img src={dispImage} alt='sb' />}
            </div>

            <div className='curItem-deets-form'>
                <SBForm item={curItem} />
            </div>
            
        </div>
    
    );
}

export default ItemForm;