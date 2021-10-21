import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getAllItems } from '../store/items';
import { getItemTypes } from '../store/item_types';
import './../styles/shop.css'
import ShopFilters from './ShopFilters';


const Shop = () => {
    let cartStorage = window.localStorage
    let cart = cartStorage.getItem('cart')
    if( cart === null){
        cartStorage.setItem('cart', {});
    }
    
    const history = useHistory()
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const item_types = useSelector(state => state.item_types)

    const [colorFilter, setColorFilter] = useState([])
    
    useEffect(() => {
        dispatch(getAllItems())
        dispatch(getItemTypes())
    }, [dispatch])
    
    const goToItem = (e, item_id, item_type) => {
        e.preventDefault()
        history.push(`/shop/${item_types[`${item_type}`].item_type}/${item_id}`)
    }
    const runFilter = (item) => {
        if (colorFilter.includes(item.color)){
            return true;
        }
    }

    return (
        <div className="profile-page-container">
            <ShopFilters />
            <div>
                <h1>This is the shop</h1>
                <ul>
                    {items?.map((item, i) => (
                        <li hidden={runFilter(item)} key={i} className="item-tile" >
                            <div onClick={e=>goToItem(e, item.id, item.item_type)}>
                            <p>{item.id} </p>
                            <p>{item.name}</p>
                            <p>$ {item.price}.00</p>
                            <p>{item.color}</p>
                            <p>{item.size}</p>
                            <p>{item.gender}</p>
                            {/* { item_types &&
                                <NavLink to={`/shop/${item_types[`${item.item_type}`].item_type}/${item.id}`} exact={true}>go</NavLink>
                            } */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Shop;