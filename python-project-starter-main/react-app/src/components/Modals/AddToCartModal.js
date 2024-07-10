import React from 'react';

import './../../styles/modal-cart-add.css'


const AddToCartModal = (props) => {
    const item = props.confirmItem
    
    if (!props.show) {
        return null;
    }
    
    return (
        <div className='modal-container' onClick={props.onClose}>
            <div className='atcc-container flex-col-cont' onClick={(e) => e.stopPropagation()}>
                <h2 className='conf-title'>{props.quantity} Item(s) added to cart</h2>

                <div className='itemConf-sec-cont flex-row-cont'>
                    <div className='itemConf-left'>
                        <img src={item.item_image} alt={item.item_name}/>
                    </div>
                    <div className='itemConf-right flex-col-cont'>
                        <p className='grey-label'>{item.item_name}</p>
                        <p className='grey-label'>{item.item_gender}</p>
                        <p className='grey-label'>{item.item_color}</p>
                        <p className='grey-label'>{item.item_size}</p>
                    </div>
                </div>

                <div className='flex-row-cont item-form-buttons-subcont'>
                    <button className='grey-green-btn item-form-submit-btn' onClick={props.onClose}>
                        Continue Shopping 
                    </button>
                    <a href='/cart' className='item-conf-checkout-link'>
                        <button className='item-conf-checkout-btn'>Checkout</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AddToCartModal;
