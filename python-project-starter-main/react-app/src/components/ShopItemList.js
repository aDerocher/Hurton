import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './../styles/shop.css'
import './../styles/shop-filters.css'
// import ShopFilters from './ShopFilters';


const ShopItemsList = (props) => {
    const history = useHistory()
    const items = props.items
    const item_types = useSelector(state => state.item_types)

    useEffect(()=>{

    },[items])

    const goToItem = (e, item_id, item_type) => {
        e.preventDefault()
        history.push(`/shop/${item_types[`${item_type}`].item_type}/${item_id}`)
    }
    
    return (
        <div className='sale-cards-container'>
            {items?.map((item, i) => (
                <div className="sale-card" key={i}>
                    <div className="sale-photo-section hover-hand" onClick={e=>goToItem(e, item.id, item.item_type)}>
                        <img src={item.image1} className='sale-image' alt={item.name} />
                    </div>

                    <div className="sale-content-section hover-hand" onClick={e=>goToItem(e, item.id, item.item_type)}>
                        <p className='sale-text'>{item.name}</p>
                        <p className='sale-text'>$ {item.price}.00</p>
                    </div>
                    <div className='sale-compare-section'>
                        {/* <input disabled={true} type='checkbox' name="itemId" value="itemId" /> */}
                        {/* <label className="dead-link"><i>Compare</i></label> */}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShopItemsList;