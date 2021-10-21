import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCartItems, addToCart } from '../../store/cart';
import { getUsersWishlist, addWishlistItem } from '../../store/wishlist';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
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
        }
        dispatch(addWishlistItem(formData))
    }
    const addItemToCart = (e) => {
        e.preventDefault()
        
        let uid = null
        if(sessionUser) uid = sessionUser.id
        const formData = {
            user_id: uid,
            item_id: parseInt(itemId),
            item_name: item.name,
            item_color: item.color,
            item_size: item.size,
            item_price: item.price,
            quantity: quantity,
        }
        if (uid) {
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
                <button onClick={e=>addItemToCart(e)}>Add to Cart</button>
                <button onClick={e=>addItemToWishlist(e)}>Add to Wishlist</button>
                {/* <button onClick={e=>showLocalCart(e)}>showLocalCart</button> */}
            </div>
        </div>
    );
}

export default Snowboard;