import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/splash-page.css"

function SplashPage() {
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
        <div className="splash-page-container">
            <div>
                <h2>Welcome to Hurton!</h2>
            </div>
        </div>
    );
}
export default SplashPage;
