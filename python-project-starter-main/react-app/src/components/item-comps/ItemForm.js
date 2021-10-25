import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addToCart, editCartItem } from './../../store/cart';
import { addWishlistItem } from './../../store/wishlist';
import './../../styles/item-form.css'


const ItemForm = (item) => {
    // const { item } = useParams()
    console.log(item.item)
    const dispatch = useDispatch()
    const usersCart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user)
    const usersWishlist = useSelector(state => state.wishlist)
    
    const [ quantity, setQuantity ] = useState(1)
    
    // useEffect(() => {

    // }, [dispatch])
    
    
    // // handle adding the item to a users wishlist ================
    // const addItemToWishlist = (e) => {
    //     e.preventDefault()
    //     if(!sessionUser){
    //         alert("you must be logged in to add items to a wishlist!");
    //         return
    //     }
    //     let wl_exists = usersWishlist?.filter((i) => {
    //         return i.item_id === parseInt(itemId)
    //     })
    //     if(wl_exists.length > 0){return}
    //     const formData = {
    //         user_id: sessionUser.id,
    //         item_id: parseInt(itemId),
    //         item_name: item.name,
    //         item_color: item.color,
    //         item_size: item.size,
    //         item_price: item.price,
    //         item_image: item.image1
    //     }
    //     dispatch(addWishlistItem(formData))
    // }
    
    // // handle adding an item to the users cart ===============
    // const addItemToCart = (e, item) => {
    //     e.preventDefault()
    //     let uid = null
    //     if(sessionUser) uid = sessionUser.id
    //     const formData = {
    //         item_id: parseInt(itemId),
    //         item_name: item.name,
    //         item_color: item.color,
    //         item_size: item.size,
    //         item_price: item.price,
    //         item_image: item.image1,
    //         quantity: quantity,
    //     }
    //     if (uid) {
    //         const existingCartItem = usersCart.filter((item)=>{
    //             if((item.item_id === formData.item_id && item.item_size === formData.item_size) && item.item_color === formData.item_color)
    //             return true
    //         })
    //         if (existingCartItem.length > 0) {
    //             existingCartItem[0].quantity +=1
    //             dispatch(editCartItem(existingCartItem[0].id, existingCartItem[0].quantity))
    //             return
    //         }
    //         dispatch(addToCart(formData))
    //         return
    //     }
    //     addToLocalCart(formData)
    // }

    // // handle adding an item to the cart that is in local storage (if no session user)
    // const addToLocalCart = (data) => {
    //     let cart = localStorage.getItem('cart');
    //     if(!cart){
    //         let cartStorage = window.localStorage;
    //         cartStorage.setItem('cart', JSON.stringify({}));
    //         cart = localStorage.getItem('cart');
    //     }
    //     console.log(JSON.parse(cart))
    //     cart = JSON.parse(cart)
    //     if (cart[`${data.item_id}_${data.item_color}_${data.item_size}`]){
    //         cart[`${data.item_id}_${data.item_color}_${data.item_size}`].quantity += data.quantity
    //     } else {
    //         cart[`${data.item_id}_${data.item_color}_${data.item_size}`] = data
    //     }
    //     window.localStorage.setItem('cart', JSON.stringify(cart))
    // }

    // const [ displayedImage, setDisplayedImage ] = useState(item?.image1)


    return (
        <div className="item-form-container content-width">
            {/* <div className='item-details-selection flex-row-cont'>
                <div className='item-deets-imgs flex-col-cont'>
                    lots of images vertically
                </div>
                <div className='item-deets-img'>
                    <img src={item?.image1} alt='sb' />
                </div>
                <div className='item-deets-form'>
                    <p className=''>{}</p>
                    <p className=''>{item?.name}</p>
                    <p className=''>{item?.price}</p>
                    <p className=''>{item?.color}</p>
                    <form>
                    </form>
                    <div>
                        <div className='flex-row-cont'>
                            <button className='grey-green-btn'
                            onClick={e=>addItemToCart(e, item)}>
                                ADD TO CART
                            </button>
                            <button onClick={e=>addItemToWishlist(e)}>
                                &lt;3
                            </button>
                        </div>
                        <button>Find My Size</button>
                    </div>
                </div>
                
            </div> */}
        </div>
    );
}

export default ItemForm;