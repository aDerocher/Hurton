import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function Wishlist() {
//   const [user, setUser] = useState({});
//   const { userId }  = useParams();

//   useEffect(() => {
//     if (!userId) {
//       return;
//     }
//     (async () => {
//       const response = await fetch(`/api/users/${userId}`);
//       const user = await response.json();
//       setUser(user);
//     })();
//   }, [userId]);

//   if (!user) {
//     return null;
//   }

    return (
        <div class="profile-page-container">
            <ProfileSidebar />
            <div>
                <h2>Wishlist</h2>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
        </div>
    );
}
export default Wishlist;