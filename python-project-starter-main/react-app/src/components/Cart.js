import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import './../styles/cart.css'
import CartSidebar from './CartSidebar';


const Cart = () => {
    // const dispatch = useDispatch()
    // const items = useSelector(state => state.items)
    
    // useEffect(() => {
    //     dispatch(getAllItems())
    //     console.log(items[0])
    // }, [dispatch])
    

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