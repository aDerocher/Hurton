import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getItemReviews } from './../../store/items';
import { getCartItems, addToCart, editCartItem } from './../../store/cart';
import { getUsersWishlist, addWishlistItem } from './../../store/wishlist';
import { getOrderHistory } from './../../store/session';
import Reviews from '../Reviews';
import NewReview from '../NewReview';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    const usersCart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session.user)
    const usersWishlist = useSelector(state => state.wishlist)
    const reviews = useSelector(state => state.reviews)
    const orderHistory = useSelector(state => state.session.user?.order_history)
    
    const [ quantity, setQuantity ] = useState(1)
    const [ userCanRev, setUserCanRev ] = useState(false)
    
    useEffect(() => {
        dispatch(getOrderHistory(sessionUser?.id))
        dispatch(getOneItem(itemId))
        dispatch(getItemReviews(itemId))
        if(sessionUser){
            dispatch(getUsersWishlist(sessionUser?.id))
            dispatch(getCartItems(sessionUser?.id))
        }
    }, [dispatch])
    

    // handle adding the item to a users wishlist ================
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
        const formData = {
            user_id: sessionUser.id,
            item_id: parseInt(itemId),
            item_name: item.name,
            item_color: item.color,
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
            item_id: parseInt(itemId),
            item_name: item.name,
            item_color: item.color,
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

    // handle adding an item to the cart that is in local storage (if no session user)
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

    // makes sure the new review form only displays if:
    // 1. the user is logged in
    // 2. has not left a review on this product before
    // 3. item is in the users order history
    useEffect(() => {
        if (sessionUser?.id){
            let x = reviews?.filter((r)=> {
                return r.user_id === sessionUser.id
            })
            let y = orderHistory?.filter((o)=> {
                return o.item_id === item?.id
            })
            if (x?.length === 0 && y?.length > 0) {
                setUserCanRev(true)
            } else {
                setUserCanRev(false)
            }
        }
    }, [item, sessionUser, reviews, orderHistory])
    
    return (
        <div className="item-page-container">
            <div>
                <h1>This is one Item</h1>
                <form>
                    <input type='number'></input>
                </form>
                <p>{item?.name}</p>
                <p>{item?.price}</p>
                <p>{item?.color}</p>
                <button onClick={e=>addItemToCart(e, item)}>Add to Cart</button>
                <button onClick={e=>addItemToWishlist(e)}>Add to Wishlist</button>
                <div>
                    <img src={item?.image1} alt="ii" />
                </div>
                {/* <button onClick={e=>showLocalCart(e)}>showLocalCart</button> */}
            </div>
            {userCanRev &&
                <NewReview user={sessionUser} itemId={item?.id}/>
            }
            {reviews.map((review, i)=>(
                <Reviews key={i}  user={sessionUser} review={review}/> 
            ))}
        </div>
    );
}

export default Snowboard;