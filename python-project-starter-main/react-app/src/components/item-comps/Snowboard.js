import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCartItems } from '../../store/cart';
import { addWishlistItem } from '../../store/wishlist';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    const sessionUser = useSelector(state => state.session.user)


    useEffect(() => {
        dispatch(getOneItem(itemId))
        // dispatch(getUsersWishlist(sessionUserId))
        // dispatch(getCartItems(sessionUserId))
        console.log(item)
    }, [dispatch])
    
    const addItemToWishlist = (e) => {
        e.preventDefault()
        console.log(sessionUser.id)
        if(!sessionUser.id){
            alert("you must be logged in to add items to a wishlist!");
            return
        }
        const formData = {
            user_id: sessionUser.id,
            item_id: itemId,
            item_color: item.color,
            item_size: item.size,
        }
        dispatch(addWishlistItem(formData))
    }
    const addItemToCart = (e) => {
        e.preventDefault()

    }

    return (
        <div className="item-page-container">
            <div>
                <h1>This is one Item</h1>
                <p>{item?.name}</p>
                <button onClick={e=>addItemToCart(e)}>Add to Cart</button>
                <button onClick={e=>addItemToWishlist(e)}>Add to Wishlist</button>
            </div>
        </div>
    );
}

export default Snowboard;