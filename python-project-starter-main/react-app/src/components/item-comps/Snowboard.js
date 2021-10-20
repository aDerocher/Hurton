import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const { itemId } = useParams()
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    // const itemTypes = useSelector(state => state.item_types)

    useEffect(() => {
        dispatch(getOneItem(itemId))
        console.log(item)
    }, [dispatch])
    
    const addItemToWishlist = (e, itemId) => {
        e.preventDefault()
    }
    const addItemToCart = (e, itemId) => {
        e.preventDefault()
    }

    return (
        <div className="item-page-container">
            <div>
                <h1>This is one Item</h1>
                <p>{item?.name}</p>
                <button onClick={e=>addItemToWishlist(e)}>Add to Cart</button>
                <button onClick={e=>addItemToCart(e)}>Add to Wishlist</button>
            </div>
        </div>
    );
}

export default Snowboard;