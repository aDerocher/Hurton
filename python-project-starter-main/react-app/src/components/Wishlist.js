import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getUsersWishlist, deleteWishlistItem } from "../store/wishlist";
import { addToCart, getCartItems } from "../store/cart";
import ProfileSidebar from "./ProfileSidebar";
import "./../styles/profile-page.css";

function Wishlist() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUsersWishlist(userId));
    dispatch(getCartItems(userId));
  }, [dispatch, userId]);

  const sessionUser = useSelector((state) => state.session.user);
  const userWishlist = useSelector((state) => state.wishlist);
  const userCart = useSelector((state) => state.cart);

  const removeFromWishlist = (e, id) => {
    e.preventDefault();
    dispatch(deleteWishlistItem(id));
  };

  // handle moving items from the wishlist to the cart
  const wishlistToCart = (e, wl_item) => {
    e.preventDefault();
    const formData = {
      item_id: wl_item.item_id,
      item_name: wl_item.item_name,
      item_color: wl_item.item_color,
      item_gender: wl_item.item_gender,
      item_size: wl_item.item_size,
      item_price: wl_item.item_price,
      item_image: wl_item.item_image,
      quantity: 1,
    };
    dispatch(addToCart(formData));
    return;
  };

  const itemExistsInCart = (itemArr, wl_item) => {
    let inCart = itemArr.filter((i) => {
      return (
        wl_item.item_id === i.item_id &&
        wl_item.item_color === i.item_color &&
        wl_item.item_size === i.item_size
      );
    });
    return inCart.length > 0;
  };

  return (
    <div className="profile-page-container">
      <div className="profile-page-sub-container content-width">
        <ProfileSidebar />
        <div className="profile-right flex-col-cont">
          <h4 className="profile-title">
            Hi {sessionUser.firstName} {sessionUser.lastName}
          </h4>
          <div className="profile-sec">
            <div className="profile-sec-topper">
              <h4 className="profile-title pr-sub-title">WISHLIST</h4>
            </div>

            {userWishlist.length === 0 && (
              <div className="flex-row-cont-apart empty-user-list-wl">
                <p>You don’t have any items in your wishlist yet.</p>
                <NavLink to="/shop">
                  <button className="btn simple black-rectangle-btn">
                    SHOP NOW
                  </button>
                </NavLink>
              </div>
            )}

            {/* NOTE ============> : "pic-" class is not 'picture', its "Profile Item Card" */}
            {userWishlist?.map((item, i) => (
              <div key={i} className="profile-item-card flex-row-cont">
                <div className="pic-section flex-row-cont">
                  <img
                    className="pic-image"
                    src={item.item_image}
                    alt={item.name}
                  />
                  <div className="pic-section pic-text flex-col-cont">
                    <p className="profile-title pr-sub-title">
                      {item.item_gender}'s Hurton {item.item_name}
                    </p>
                    <p className="grey-label">Color: {item.item_color}</p>
                    <p className="grey-label">Size: {item.item_size}</p>
                    <p className="grey-label">
                      <strong>$ {item.item_price}.00</strong>
                    </p>
                  </div>
                </div>

                <div className="pic-section pic-buttons">
                  <button
                    className="delete-btn-simple"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromWishlist(e, item.id);
                    }}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  {/* <button className='black-rectangle-btn wishlist-cart-btn' */}
                  <button
                    className="wishlist-cart-btn dis"
                    disabled={itemExistsInCart(userCart, item)}
                    onClick={(e) => {
                      e.stopPropagation();
                      wishlistToCart(e, item);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wishlist;
