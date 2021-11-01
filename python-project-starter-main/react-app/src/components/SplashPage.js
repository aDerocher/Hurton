import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getOrderHistory } from '../store/session';
import "./../styles/splash-page.css"

function SplashPage() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        setUser(user);
    })();
    dispatch(getOrderHistory(userId))
    if(false) console.log(user)
  }, [dispatch, user, userId]);

    return (
        <div className="splash-page-container">
            <div className='ak-advert'>
                <p>Layers for anywhere you go <span className='ak-link'>
                        <NavLink to={`/shop`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: 'white'}}>
                            Shop [hk]
                        </NavLink>
                        <span className='ak-c'>®</span>
                </span></p>
            </div>

            {/* <!-- ================================================================= -->
            <!-- ========================= Main sections =========================  --> */}

            <div className='splash-photo-container'>
                <h2 className='splash-title'>Which Boards Does<br /> the Team Ride?</h2>
                <p className='splash-text'>Ever wonder what gear your favorite snowboarder uses? Head to <br />the Hurton Blog to find out which board 
                    each rider calls their tried and true, or check out <br />our round-up to explore their complete setups.</p>
                <div className='splash-btns-cont'>
                    {/* <button className='splash-btn dead-link dis-dark' disabled={true}>READ MORE</button> */}
                    <NavLink to={`/shop`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: 'white'}}>
                            <button className='splash-btn'>SHOP SETUPS</button>
                    </NavLink>
                    
                </div>
            </div>


            {/* ========================= Main sections ========================= */}
            {/* ================================================================= */}

            {/* ========================= Shopping Links ======================== */}
            <div className='content-width shop-sections-container'>
                <div className='shop-section'>
                    <img src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/splash-jackets.jpg" alt="shop" className='shop-section-img' />
                    {/* <h3 className="shop-section-label dead-link">Shop Jackets</h3> */}
                </div>
                <div className='shop-section'>
                    <img src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/splash-bibs-pants.jpg" alt="shop" className='shop-section-img' />
                    {/* <h3 className="shop-section-label dead-link">Pants & Bibs</h3> */}
                </div>
                <div className='shop-section'>
                    <img src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/splash-fleece.jpg" alt="shop" className='shop-section-img' />
                    {/* <h3 className="shop-section-label dead-link">Shop Fleece</h3> */}
                </div>
                <div className='shop-section'>
                    <img src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/splash-kids.jpg" alt="shop" className='shop-section-img' />
                    {/* <h3 className="shop-section-label dead-link">Shop Kids</h3> */}
                </div>
            </div>


            {/* ========================= Step-ons Advert ========================= */}
            <div className='stepon-section-container content-width'>
                <div>
                    <p className='stepon-text'>Coming Soon</p>
                    <h2 className='stepon-title'>Custom Graphics<span className='stepon-r'> ®</span></h2>
                    <p className='stepon-text'>
                        Good news, everyone. The new Custom Hurt® graphic designs are almost here.
                        <br />
                        Get right to riding on 10/18 with fresh colors and styles.
                    </p>
                    {/* <button className='stepon-btn dead-link dis' disabled={true}>STAY IN THE KNOW</button> */}
                </div>
            </div>
    
        </div>
    );
}

export default SplashPage;
