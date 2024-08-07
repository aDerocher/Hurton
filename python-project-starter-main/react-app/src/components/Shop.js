import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllItems } from "../store/items";
import { getItemTypes } from "../store/item_types";
import "./../styles/shop.css";
// import ShopFilters from './ShopFilters';

const Shop = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const item_types = useSelector((state) => state.item_types);
  // TODO: Add filtering options for shop
  // const [colorFilter, setColorFilter] = useState([])

  useEffect(() => {
    dispatch(getAllItems());
    dispatch(getItemTypes());
  }, [dispatch]);

  const goToItem = (e, item_id, item_type) => {
    e.preventDefault();
    history.push(`/shop/${item_types[`${item_type}`].item_type}/${item_id}`);
  };

  return (
    <div className="shop-page-cont">
      <div className="flex-col-cont content-width shop-page-topper">
        <p className="grey-label">Snowboarding / Shop All Snowboard Gear</p>
        <h1>Shop</h1>
        <p>
          Since day one, Hurton has been built on boards. Explore the industry's
          most diverse snowboard lineup for park, all-mountain, powder,
          splitboarding, and the backcountry.
        </p>
      </div>

      <div className="flex-row-cont content-width">
        <div className="sale-cards-container">
          {items?.map((item, i) => (
            <div className="sale-card" key={i}>
              <div
                className="sale-photo-section hover-hand"
                onClick={(e) => goToItem(e, item.id, item.item_type)}
              >
                <img src={item.image1} className="sale-image" alt={item.name} />
              </div>

              <div
                className="sale-content-section hover-hand"
                onClick={(e) => goToItem(e, item.id, item.item_type)}
              >
                <p className="sale-text">{item.name}</p>
                <p className="sale-text">$ {item.price}.00</p>
              </div>
              <div className="sale-compare-section">
                {/* <input disabled={true} type='checkbox' name="itemId" value="itemId" /> */}
                {/* <label className="dead-link"><i>Compare</i></label> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
