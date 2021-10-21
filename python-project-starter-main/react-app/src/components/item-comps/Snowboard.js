import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
// import { getCartItems } from '../../store/cart';
import { addWishlistItem } from '../../store/wishlist';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    const sessionUser = useSelector(state => state.session.user)
    const usersWishlist = useSelector(state => state.wishlist)


    useEffect(() => {
        dispatch(getOneItem(itemId))
        // dispatch(getUsersWishlist(sessionUserId))
        // dispatch(getCartItems(sessionUserId))
    }, [dispatch])
    
    const addItemToWishlist = (e) => {
        e.preventDefault()

        let x = usersWishlist?.filter((i) => {
            console.log(i.item_id, parseInt(itemId))
            return i.item_id === parseInt(itemId)
        })

        if(!sessionUser){
            alert("you must be logged in to add items to a wishlist!");
            return
        }
        if(x.length > 0){
            return
        }
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