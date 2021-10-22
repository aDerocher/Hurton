import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCartItems, addToCart, editCartItem } from '../../store/cart';
import { getUsersWishlist, addWishlistItem } from '../../store/wishlist';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    const usersCart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user)
    const usersWishlist = useSelector(state => state.wishlist)

    const [ quantity, setQuantity ] = useState(1)

    useEffect(() => {
        dispatch(getOneItem(itemId))
        if(sessionUser){
            dispatch(getUsersWishlist(sessionUser?.id))
            dispatch(getCartItems(sessionUser?.id))
        }
    }, [dispatch])
    
    const addItemToWishlist = (e) => {
        e.preventDefault()
        if(!sessionUser){
            alert("you must be logged in to add items to a wishlist!");
            return
        }
        let wl_exists = usersWishlist?.filter((i) => {
            return i.item_id === parseInt(itemId)
        })
        if(wl_exists.length > 0){return}
        // usersWishlist?.forEach((i) => { if (i.item_id === parseInt(itemId)) return })


        const formData = {
            user_id: sessionUser.id,
            item_id: parseInt(itemId),
            item_name: item.name,
            item_color: item.color,
            item_size: item.size,
            item_price: item.price
        }
        dispatch(addWishlistItem(formData))
    }
    
    const addItemToCart = (e, item) => {
        e.preventDefault()
        
        let uid = null
        if(sessionUser) uid = sessionUser.id
        const formData = {
            item_id: parseInt(itemId),
            item_name: item.name,
            item_color: item.color,
            item_size: item.size,
            item_price: item.price,
            quantity: quantity,
        }
        if (uid) {
            const existingCartItem = usersCart.filter((item)=>{
                // console.log(item.item_id, formData.item_id)
                // console.log(item.item_size, formData.item_size)
                // console.log(item.item_color, formData.item_color)
                if((item.item_id === formData.item_id && item.item_size === formData.item_size) && item.item_color === formData.item_color)
                return true
            })
            console.log(existingCartItem, 'existing============')
            if (existingCartItem.length > 0) {
                // console.log(existingCartItem[0])
                // console.log(existingCartItem[0].quantity)
                existingCartItem[0].quantity +=1
                dispatch(editCartItem(existingCartItem[0].id, existingCartItem[0].quantity))
                return
            }
            dispatch(addToCart(formData))
            return
        }
        addToLocalCart(formData)
    }

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

    return (
        <div className="item-page-container">
            <div>
                <h1>This is one Item</h1>
                <form>
                    <input type='number'></input>
                </form>
                <p>{item?.name}</p>
                <button onClick={e=>addItemToCart(e, item)}>Add to Cart</button>
                <button onClick={e=>addItemToWishlist(e)}>Add to Wishlist</button>
                {/* <button onClick={e=>showLocalCart(e)}>showLocalCart</button> */}
            </div>
        </div>
    );
}

export default Snowboard;