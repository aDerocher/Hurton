import React, { useEffect } from 'react';
// import { useParams, NavLink } from 'react-router-dom';

function CartSidebar() {
//   const [user, setUser] = useState({});
//   const { userId }  = useParams();

  useEffect(() => {

  }, []);

//   if (!user) {
//     return null;
//   }

    return (
        <div className='cart-sidebar'>
            <p>Cart Sidebar</p>
            <ul>
                <li>
                    {/* <NavLink to={`/users/${userId}/edit-profile`}><button>Info & Preferences</button></NavLink> */}
                    <p>Option 1</p>
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