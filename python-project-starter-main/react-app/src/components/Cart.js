import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import {getAllItems} from './../store/items'
import CartSidebar from './CartSidebar';
import './../styles/cart.css'


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    let cart = useSelector(state => state.cart)
    if (cart?.length === 0){
        cart = localStorage.getItem('cart');
        let cartStorage = window.localStorage;
        cartStorage.setItem('cart', JSON.stringify({}));
        cart = localStorage.getItem('cart');
        cart = JSON.parse(cart)
        for (const key in cart) {
            console.log(`${key}: ${cart[key]}`);
        }              
    }
    console.log(cart, '...................................')

    console.log(cart, '+++++++++++++++++++++++++++++++++++')
    
    useEffect(() => {
        dispatch(getAllItems())
        // console.log(items[0])
    }, [dispatch])
    

    return (
        <div className="cart-page-container">
            <div>
                <h1>This is the Cart</h1>
                <ul>
                    {/* {cart?.map((item, i) => (
                        <li key={i}>{item.id}</li>
                    ))} */}
                </ul>
                
            </div>
            <CartSidebar />
        </div>
    );
}

export default Cart;