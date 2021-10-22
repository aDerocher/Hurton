import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function CartSidebar() {
//   const { userId }  = useParams();

    return (
        <div className='cart-sidebar'>
            <p>Cart Sidebar</p>
            <ul>
                <li>
                    <NavLink to={`/cart/checkout`}><button>Checkout</button></NavLink>
                </li>
                <li>
                    {/* <NavLink to={`/users/${userId}/order-history`}><button>Order History</button></NavLink> */}
                    <p>Option 2</p>
                </li>
                <li>
                    {/* <NavLink to={`/users/${userId}/wishlist`}><button>wishlist</button></NavLink> */}
                    <p>Option 3</p>
                </li>
            </ul>
        </div>
    );
}
export default CartSidebar;