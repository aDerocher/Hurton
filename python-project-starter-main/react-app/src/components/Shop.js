import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getAllItems } from '../store/items';
import { getItemTypes } from '../store/item_types';
import './../styles/shop.css'
import ShopFilters from './ShopFilters';


const Shop = () => {
    
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
        <div>
            <div className="flex-col-cont content-width">
                <h1>This is the shop</h1>
            </div>
            <div className='flex-row-cont content-width'>
                <ShopFilters />
                <div className='sale-cards-container'>
                    {items?.map((item, i) => (
                        <div className="sale-card" hidden={runFilter(item)} key={i}>
                            <div className="sale-photo-section hover-hand" onClick={e=>goToItem(e, item.id, item.item_type)}>
                                <img src={item.image1} className='sale-image' alt={item.name} />
                            </div>
                            <div className='item-colors-section'>
                                <div className="sale-swatch"></div>
                                <div className="sale-swatch"></div>
                                <div className="sale-swatch"></div>
                            </div>
                            <div className="sale-content-section hover-hand" onClick={e=>goToItem(e, item.id, item.item_type)}>
                                <p className='sale-text'>{item.name}</p>
                                <p className='sale-text'>$ {item.price}.00</p>
                            </div>
                            <div className='sale-compare-section'>
                                <input disabled={true} type='checkbox' name="compare" value="itemId" />
                                <label for="itemId"><i>Compare</i></label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;