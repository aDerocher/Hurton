import React from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import ProfileSidebar from './ProfileSidebar';
import "./../styles/footer.css"

function Footer() {

    return (
        <div className="footer-container main-container ">

            <div className='footer-search-container content-width'>
                <div className='foot-s-sec fss-one'>
                    <p>Sign up for news, promotions, and more</p>
                </div>

                <div className='foot-s-sec fss-two'>
                    <div className='faux-search'>
                        <input className='f-search-inp' type="text" />
                        <p>📧</p>
                    </div>
                </div>

                <div className='foot-s-sec fss-thr'>
                    <p className='dead-link'>FIND A STORE</p>
                    <p className='dead-link'>TAKE A TEST RIDE</p>
                </div>
            </div>

            <div className='footer-top content-width'>
                <div className='footer-top-section'>
                    <h2 className="foot-title">About Us</h2>
                    <ul>
                    <li><a href="https://github.com/aDerocher" target="_blank" className="github-link"><i className="fab fa-github"> </i> Creators Github</a></li>
                    <li className='dead-link'>About Hurton</li>
                    <li className='dead-link'>Careers</li>
                    <li className='dead-link'>Sustainability</li>
                    <li className='dead-link'>Hill Foundation</li>
                    <li className='dead-link'>Accessability</li>
                    <li className='dead-link'>Affiliate</li>
                    <li className='dead-link'>Performer Program</li>
                    <li className='dead-link'>Discount Programs</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Discover</h2>
                    <ul>
                        <li className='dead-link'>Learn To Ride</li>
                        <li className='dead-link'>Riglet Snowboarding</li>
                        <li className='dead-link'>The Stash</li>
                        <li className='dead-link'>The Hurton Blog</li>
                        <li className='dead-link'>#Hurton Team</li>
                        <li className='dead-link'>Events</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Self Service</h2>
                    <ul>
                        <li className='dead-link'>Explore Our Services</li>
                        <li className='dead-link'>Track Your Order</li>
                        <li className='dead-link'>Returns</li>
                        <li className='dead-link'>Shipping Policy</li>
                        <li className='dead-link'>Warranty</li>
                        <li className='dead-link'>Spare Parts</li>
                        <li className='dead-link'>Size Charts</li>
                        <li className='dead-link'>Customer Reviews</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Get Help</h2>
                    <ul>
                        <li className='dead-link'>Help and FAQS</li>
                        <li><a href="mailto:info@andrewderocher.com" className="github-link"><i className="far fa-envelope"> </i> Email Me</a></li>
                        <li>555-IM-HURTN</li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom content-width'>
                <div className='footer-bottom-section fbs-1'>
                    <p>⚐ US/EN</p>
                    <p>©2021 Hurton Snowboards</p><p>·</p>
                </div>

                <div className='footer-bottom-section f-emojis fbs-3'>
                    <div className='soc-med-icon'></div>
                    <div className='soc-med-icon'></div>
                    <div className='soc-med-icon'></div>
                    <div className='soc-med-icon'></div>
                    <div className='soc-med-icon'></div>
                </div>

                <div className='footer-bottom-section fbs-2'>
                    <p className='f-settings dead-link'>Terms & Conditions</p>
                    <p className='f-settings dead-link'>Privacy</p>
                    <p className='f-settings dead-link'>User Content Terms</p>
                    <p className='f-settings dead-link'>Site Map</p>
                </div>
            </div>

            <div className='footer-base'>
            </div>
        </div>
    )
};

export default Footer;
