import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import {getCartItems} from '../store/cart'
import {getAllItems} from '../store/items'
import CartSidebar from './CartSidebar';
import './../styles/cart.css'


const CartPage = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const sessionUser = useSelector(state => state.session.user)

    // make sure the cart in state is current to user(if user)
    useEffect(() => {
        dispatch(getCartItems(sessionUser?.id))
    }, [dispatch])

    // if user: cart is state.cart | otherwise cart is localstorage
    let cart = useSelector(state => state.cart)
    if (cart?.length === 0){
        // look at local storage
        let cartStorage = window.localStorage;
        let ls_cart = localStorage.getItem('cart');
        // is there a cart with items in it...?
        if (ls_cart !== null && ls_cart !== {}){
            // put those in an array, and return as cart
            ls_cart = JSON.parse(ls_cart)
            let newCart = []
            for (const key in ls_cart) {
                newCart.push(ls_cart[key])
            }              
            cart = newCart
        }
    }
    // console.log(cart, '<<=== this is the cart that will render')
    
    useEffect(() => {
        dispatch(getAllItems())
        // console.log(items[0])
    }, [dispatch])
    

    return (
        <div className="cart-page-container">
            <div>
                <h1>This is the Cart</h1>
                <ul>
                    {cart?.map((item, i) => (
                        <li key={i}>
                            <p>{item.item_name}</p>
                            <p>{item.item_color}</p>
                            <p>{item.item_size}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
            <CartSidebar />
        </div>
    );
}

export default CartPage;