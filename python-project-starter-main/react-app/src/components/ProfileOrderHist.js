import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function ProfileOrderHist() {
    const {userId} = useParams();
    const sessionUser = (state => state.sessionUser.user)


    return (
        <div class="profile-page-container">
            <ProfileSidebar />
            <div>
                <h2>Order History Page</h2>
                <ul>
                    <li>Order 1</li>
                    <li>Order 2</li>
                    <li>Order 3</li>
                </ul>
            </div>
        </div>
    );
}
export default ProfileOrderHist;
