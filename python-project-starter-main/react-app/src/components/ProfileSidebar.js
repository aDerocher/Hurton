import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

function ProfileSidebar() {
//   const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {

  }, []);

//   if (!user) {
//     return null;
//   }

    return (
        <div className='sidebar'>
            <p>This is the sidebar</p>
            <ul>
                <li>
                    <NavLink to={`/users/${userId}/edit-profile`}><button>Info & Preferences</button></NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${userId}/order-history`}><button>Order History</button></NavLink>
                </li>
                <li>
                    <NavLink to={`/users/${userId}/wishlist`}><button>wishlist</button></NavLink>
                </li>
            </ul>
        </div>
    );
}
export default ProfileSidebar;
