import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getOneItem } from '../store/items';
import './../styles/shop.css'
import ShopFilters from './ShopFilters';


const Snowboard = (board_id) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    
    useEffect(() => {
        // dispatch(getOneItem(board_id))
        console.log(items[0])
    }, [dispatch])
    
    const goToItem = (e, item_id) => {
        
    }

    return (
        <div className="profile-page-container">
            <ShopFilters />
            <div>
                <h1>This is the shop</h1>
                <ul>
                    {items?.map((item, i) => (
                        <li key={i} className="item-tile" onClick={e=>goToItem(e, item.id)}>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <p>$ {item.price}.00</p>
                            <p>{item.color}</p>
                            <p>{item.size}</p>
                            <p>{item.gender}</p>
                            {/* <NavLink to={`/items/${item.type}/${item.id}`} exact={true}>go</NavLink> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Snowboard;