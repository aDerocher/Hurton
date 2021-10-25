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
            <div className="profile-page-sub-container content-width">
                <ProfileSidebar />
                <div className='profile-right flex-col-cont'>
                    <h4 className='profile-title'>Hi {user.firstName} {user.lastName}</h4>
                    <div className='profile-sec'>
                        <div className='profile-sec-topper'>
                            <h4 className='profile-title pr-sub-title'>INFO & PREFERENCES</h4>
                            <p className='profile-title profile-option'>EDIT</p>
                        </div>
                        <div className='profile-sec-content'>
                            <p>{user.firstName} {user.lastName}</p>
                            <p>{user.email}</p>
                            {user.dob && <p>{user.dob}</p>}
                        </div>
                    </div>

                    <div className='profile-sec'>
                        <div className='profile-sec-topper'>
                            <h4 className='profile-title pr-sub-title'>SAVED ADDRESS</h4>
                            <p className='profile-title profile-option'>ADD AN ADDRESS</p>
                        </div>
                        <div className='profile-sec-content'>
                            {user.address &&
                                <p>{user.address}</p>}
                        </div>
                    </div>

                    <div className='profile-sec'>
                        <div className='profile-sec-topper'><h4 className='profile-title pr-sub-title'>SAVED PAYMENT SETTINGS</h4></div>
                        <div className='profile-sec-content'>
                            {user.address &&
                                <p>{user.address}</p>}
                        </div>
                    </div>

                    {/* <NavLink to={`/users/${userId}/edit-profile`}><button>edit profile</button></NavLink> */}
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;
