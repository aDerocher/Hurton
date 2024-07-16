import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import "./../styles/profile-page.css";

function ProfileSidebar() {
  const { userId } = useParams();

  useEffect(() => {}, []);

  return (
    <div className="profile-sidebar">
      <h4 className="profile-title">My Account</h4>
      <div className="pr-nav-options">
        <NavLink
          to={`/users/${userId}`}
          style={{ textDecoration: "underline", color: `var(--link-green)` }}
        >
          <button className="pr-nav-btn">Info & Preferences</button>
        </NavLink>
        <NavLink
          to={`/users/${userId}/order-history`}
          style={{ textDecoration: "underline", color: `var(--link-green)` }}
        >
          <button className="pr-nav-btn">Order History</button>
        </NavLink>
        <NavLink
          to={`/users/${userId}/wishlist`}
          style={{ textDecoration: "underline", color: `var(--link-green)` }}
        >
          <button className="pr-nav-btn">Wishlist</button>
        </NavLink>
        <LogoutButton />
      </div>

      <h4 className="profile-title pr-sub-title dead-link">Need Help?</h4>
      <div></div>
    </div>
  );
}
export default ProfileSidebar;
