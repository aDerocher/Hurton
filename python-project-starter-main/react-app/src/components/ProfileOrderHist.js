import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import "./../styles/profile-page.css";
import { getOrderHistory } from "./../store/session";
import { addToCart } from "./../store/cart";
import { getItemTypes } from "./../store/item_types";

function ProfileOrderHist() {
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderHistory(userId));
    dispatch(getItemTypes());
  }, [dispatch, userId]);
  const pastItems = useSelector((state) => state.session.user.order_history);
  const sessionUser = useSelector((state) => state.session.user);
  // const itemTypes = useSelector(state => state.item_types)
  const userCart = useSelector((state) => state.cart);

  // Add item to cart (from wishlist)
  const wishlistToCart = (e, wl_item) => {
    e.preventDefault();
    // if cart item already exists, notify user
    if (userCart.filter((item) => {
      return (
        wl_item.item_id === item.item_id &&
        wl_item.item_color === item.item_color &&
        wl_item.item_size === item.item_size
      );
    }).length > 0) {
      alert("Item already in cart :)");
      return;
    }
    // if not, add to cart and alert user
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
    alert("Item added to cart :)");
    dispatch(addToCart(formData));
    return;
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
              <h4 className="profile-title pr-sub-title">ORDER HISTORY</h4>
            </div>

            {pastItems?.length === 0 && (
              <div className="flex-row-cont-apart empty-user-list">
                <p>We have no order records for this account.</p>
              </div>
            )}

            {pastItems?.map((pitem, i) => (
              <div key={i} className="profile-item-card flex-row-cont">
                <div className="pic-section flex-row-cont">
                  <img
                    className="pic-image"
                    src={pitem.item_image}
                    alt={pitem.name}
                  />
                  <div className="pic-section pic-text flex-col-cont">
                    <p className="profile-title pr-sub-title">
                      {pitem.item_gender}'s Hurton {pitem.item_name}
                    </p>
                    <p className="grey-label">Color: {pitem.item_color}</p>
                    <p className="grey-label">Size: {pitem.item_size}</p>
                    <p className="grey-label">
                      <strong>$ {pitem.item_price}.00</strong>
                    </p>
                  </div>
                </div>

                {/* <div> */}
                {/* <NavLink to={`/shop/${itemTypes[pitem.item_type].item_type}#reviews_section`}> */}
                {/* Leave a Review */}
                {/* </NavLink> */}
                {/* </div> */}

                <div className="orderHist-buttons">
                  <button
                    className="black-rectangle-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      wishlistToCart(e, pitem);
                    }}
                  >
                    BUY IT AGAIN
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <h2>Order History Page</h2>
                <ul>

                </ul> */}
      </div>
    </div>
  );
}
export default ProfileOrderHist;
