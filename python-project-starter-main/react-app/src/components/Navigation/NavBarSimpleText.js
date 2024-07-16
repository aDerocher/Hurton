import React from "react";
import { NavLink } from "react-router-dom";
import "./../../styles/navbar.css";

const NavBarSimple = () => {
  // The navbar on checkout should be very simple.
  // This is so the user stays focused on checking out and finalizing a purchase.

  return (
    <nav>
      <div className="meta-nav-container-text">
        <p>FREE SHIPPING ON ALL ORDERS</p>
      </div>
      <div id="nav-container">
        <div className="nav content-width">
          <div className="nav-img-section">
            <NavLink to="/" exact={true} activeClassName="active">
              <img
                id="text-logo"
                className="hurton-nav-large-text-logo"
                src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-text-logo.png"
                alt="HurtonText"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarSimple;
