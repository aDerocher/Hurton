import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { getEmptyCart } from "../../store/cart";
import "./../../styles/navbar.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    localStorage.removeItem("cart");
    await dispatch(getEmptyCart());
    await dispatch(logout());
  };
  return (
    <button className="auth-button-black" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
