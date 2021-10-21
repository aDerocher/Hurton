import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import CartSidebar from './CartSidebar';
import './../styles/cart.css'


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const cart = useSelector(state => state.cart)
    if (cart?.length === 0){

    }
    
    useEffect(() => {
        dispatch(getAllItems())
        console.log(items[0])
    }, [dispatch])
    

    return (
        <div className="cart-page-container">
            <div>
                <h1>This is the Cart</h1>
                <ul>
                    <li>Cart Item 1</li>
                    <li>Cart Item 2</li>
                    <li>Cart Item 3</li>
                </ul>
            </div>
            <CartSidebar />
        </div>
    );
}

export default Cart;