import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/cart-sidebar.css'


function CartSidebar(totalInfo) {
  const { subtotal }  = totalInfo;

    return (
        <div className='cart-sidebar-container flex-col-cont'>

            <div className='cart-side-sec to-checkout-btns-container flex-col-cont'>
                <NavLink to={`/cart/checkout/${subtotal}`} style={{ textDecoration: 'none' }}>
                    <button 
                    className='grey-green-btn to-checkout-btn check-btn-main dis'
                    disabled={subtotal === 0}>
                        Checkout
                    </button>
                </NavLink>
                <p className='grey-label'>OR</p>
                <NavLink to={`/cart/checkout/${subtotal}`} style={{ textDecoration: 'none' }}>
                    <button 
                    className='to-checkout-btn paypal-btn dis'
                    disabled={subtotal === 0}>
                        PayPal
                    </button>
                </NavLink>
                <p className='grey-label'>OR</p>
                <NavLink to={`/cart/checkout/${subtotal}`} style={{ textDecoration: 'none' }}>
                    <button 
                    className='to-checkout-btn bitcoin-btn dis'
                    disabled={subtotal === 0}>
                        Pay with ₿itcoin
                    </button>
                </NavLink>
            </div>

            <div className='cart-side-sec'>
                <p><b>ORDER SUMMARY</b></p>
                <div className='cart-mini-sec'>
                    <p className='sub-t'>Subtotal</p>
                    <p className='sub-t'>$ {subtotal}</p>
                </div>
                <div className='cart-mini-sec'>
                    <p>* Shipping Standard</p>
                    <p className='shipping-red'>FREE</p>
                </div>
                <div className='cart-mini-sec'>
                    <p>* Tax</p>
                    <p>$ 0.00</p>
                </div>
            </div>

            <div className='cart-side-sec'>
                <div className='cart-mini-sec'>
                    <p><b>ORDER TOTAL</b></p>
                    <p><b>$ {subtotal}</b></p>
                </div>
                <p className='grey-label'>*Shipping and tax are always free here.</p>
            </div>
            <div className='cart-side-sec'>
                <p className='ship-info dead-link'><strike>Easy Returns</strike></p>
                <p className='ship-info dead-link'><strike>Shipping Information</strike></p>
            </div>
        </div>
    );
}
export default CartSidebar;