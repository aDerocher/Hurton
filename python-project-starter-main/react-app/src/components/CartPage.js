import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartItems, editCartItem, deleteCartItem } from "../store/cart";
import CartSidebar from "./CartSidebar";
import "./../styles/cart.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  // Set the cart to whats in state
  let cart = useSelector((state) => state.cart);
  // However, if the cart is empty => check local storage for a cart
  if (cart?.length === 0) {
    let ls_cart = localStorage.getItem("cart");
    if (ls_cart !== null) {
      // if cart is in localstorage, set cart to array of these items
      ls_cart = JSON.parse(ls_cart);
      let newCart = [];
      for (const key in ls_cart) {
        newCart.push(ls_cart[key]);
      }
      cart = newCart;
    }
  }

  // get all cart items into the state ==============
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (sessionUser) {
      dispatch(getCartItems(sessionUser?.id));
    }
  }, [dispatch, sessionUser]);

  // maintain calculating subtotal and updating it on changes ===========
  useEffect(() => {
    let x = 0;
    cart?.forEach((i) => {
      x += i.quantity * i.item_price;
    });
    setSubtotal(x);
  }, [cart, subtotal]);

  // handle the deletion of cart item =================================
  const removeFromCart = (e, item) => {
    e.preventDefault();
    if (sessionUser) {
      dispatch(deleteCartItem(item.id));
    } else {
      removeLSCartItem(item);
    }
    let x = document.getElementById(`${item?.id}`);
    if (x) {
      x.style.display = "none";
    }
  };

  // handle the deletion of cart item from local storage ==============
  const removeLSCartItem = (cartItem) => {
    // get the cart in local storage (assume it exists)
    let ls_cart = localStorage.getItem("cart");
    ls_cart = JSON.parse(ls_cart);
    ls_cart[
      `${cartItem.item_id}_${cartItem.item_color}_${cartItem.item_size}`
    ] = undefined;
    window.localStorage.setItem("cart", JSON.stringify(ls_cart));
    setSubtotal(0);
  };

  // handle the quantity change of a cart item =======================
  const handleQuantChange = (e, cartItem, newQuant) => {
    e.preventDefault();
    sessionUser ? dispatch(editCartItem(cartItem.id, newQuant)) 
      : updateLSCartItem(cartItem, "quantity", newQuant);
    
  };

  // handle the quantity change of a cart item in local storage =======================
  const updateLSCartItem = (cartItem, attr, newQuant) => {
    let ls_cart = localStorage.getItem("cart");
    ls_cart = JSON.parse(ls_cart);
    ls_cart[`${cartItem.item_id}_${cartItem.item_color}_${cartItem.item_size}`][
      `${attr}`
    ] = newQuant;
    window.localStorage.setItem("cart", JSON.stringify(ls_cart));
    setSubtotal(0);
  };

  return (
    <div className="content-width flex-col-cont">
      <div className="cart-topper-container flex-col-cont">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <div className="cart-topper-right">
          <p>Need Help? Call (555) IM-HURTN in Oregon, USA</p>
          <p className="grey-label">Monday - Friday: 9am - 6pm PST</p>
        </div>
      </div>

      <div className="flex-row-cont card-page-cont">
        <div className="cart-left">
          {cart?.length === 0 && (
            <div className="empty-user-list-cart">
              <h2 className="shopping-cart-title">
                Your Shopping Cart is Empty
              </h2>
              <NavLink to="/shop">
                <button className="grey-green-btn cart-shop-now-btn">
                  SHOP NOW
                </button>
              </NavLink>
            </div>
          )}

          {cart?.map((cart_item, i) => (
            <div key={i} className="flex-col-cont cart-item-card">
              <div className="cart-delete-item-cont">
                <button
                  className="delete-btn-simple"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(e, cart_item);
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="cart-card-content">
                <div className="cart-img-container">
                  {/* <NavLink to={`/`} > */}
                  <img
                    className="cart-img"
                    src={cart_item.item_image}
                    alt="cart item"
                  />
                  {/* </NavLink> */}
                </div>
                <div className="cart-content-container">
                  <p className="cart-card-title">
                    {cart_item.item_gender}'s Hurton {cart_item.item_name}
                  </p>
                  <p className="cart-card-color">
                    Color: {cart_item.item_color}
                  </p>
                  <p className="cart-card-size">Size: {cart_item.item_size}</p>
                  <p className="price grey-label">
                    <strong>$ {cart_item.item_price}.00</strong>
                  </p>
                  {/* <p className="amount-saved">$22(10%)</p> */}
                </div>
                <form className="cart-quantity-sel">
                  <select
                    name="cart-quantity"
                    onChange={(e) =>
                      handleQuantChange(e, cart_item, e.target.value)
                    }
                    className="cart-quantity"
                    id=""
                  >
                    <option
                      className="def-option"
                      value={cart_item.quantity}
                      defaultValue={cart_item.quantity}
                    >
                      {cart_item.quantity}
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </form>
                <p className="cart-item-total">
                  <b>$ {cart_item.item_price * cart_item.quantity}</b>
                </p>
              </div>
            </div>
          ))}
          <div className="cart-subtotal flex-row-cont">
            <p>Subtotal: </p>
            <p>$ {subtotal}.00</p>
          </div>
        </div>

        <div className="cart-right">
          <CartSidebar subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
