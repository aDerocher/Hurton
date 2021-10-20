import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function ProfileEdit() {
    const params = useParams();
    const userId = params.userId
    const sessionUser = (state => state.sessionUser.user)


    return (
        <div class="profile-page-container">
            <ProfileSidebar />
            <div>
                <form action='' method=''>
                    <p>First Name</p> {sessionUser.firstName}
                    <input></input>
                    <p>Last Name</p> {sessionUser.lastName}
                    <input></input>
                    <p>Email</p> {sessionUser.email}
                    <input></input>
                    <p>Password</p>
                    <input></input>
                    <p>Confirm Password</p>
                    <input></input>
                </form>
                <NavLink to={`/users/${userId}/wishlist`}><button>wishlist</button></NavLink>
                <button>edit profile</button>
            </div>
        </div>
    );
}
export default ProfileEdit;
