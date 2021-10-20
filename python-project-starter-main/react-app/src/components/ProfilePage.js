import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function ProfilePage() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

    return (
        <div className="profile-page-container">
            <ProfileSidebar />
            <div>
                <ul>
                    <li>
                        <strong>User Id</strong> {userId}
                    </li>
                    <li>
                        <strong>First Name</strong> {user.firstName}
                    </li>
                    <li>
                        <strong>Last Name</strong> {user.lastName}
                    </li>
                    <li>
                        <strong>Email</strong> {user.email}
                    </li>
                </ul>
                <NavLink to={`/users/${userId}/wishlist`}><button>wishlist</button></NavLink>
                <NavLink to={`/users/${userId}/edit-profile`}><button>edit profile</button></NavLink>
            </div>
        </div>
    );
}
export default ProfilePage;
