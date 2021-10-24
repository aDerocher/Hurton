import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
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
                    <p>FIND A STORE</p>
                    <p>TAKE A TEST RIDE</p>
                </div>
            </div>

            <div className='footer-top content-width'>
                <div className='footer-top-section'>
                    <h2 className="foot-title">About Us</h2>
                    <ul>
                    <li><a href="https://github.com/aDerocher" target="_blank" className="github-link"><i className="fab fa-github"> </i> Creators Github</a></li>
                    <li>About Hurton</li>
                    <li>Careers</li>
                    <li>Sustainability</li>
                    <li>Hill Foundation</li>
                    <li>Accessability</li>
                    <li>Affiliate</li>
                    <li>Performer Program</li>
                    <li>Discount Programs</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Discover</h2>
                    <ul>
                    <li>Learn To Ride</li>
                    <li>Riglet Snowboarding</li>
                    <li>The Stash</li>
                    <li>The Hurton Blog</li>
                    <li>#Hurton Team</li>
                    <li>Events</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Self Service</h2>
                    <ul>
                    <li>Explore Our Services</li>
                    <li>Track Your Order</li>
                    <li>Returns</li>
                    <li>Shipping Policy</li>
                    <li>Warranty</li>
                    <li>Spare Parts</li>
                    <li>Size Charts</li>
                    <li>Customer Reviews</li>
                    </ul>
                </div>
                <div className='footer-top-section'>
                    <h2 className="foot-title">Get Help</h2>
                    <ul>
                        <li>Help and FAQS</li>
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
                    <p className='f-settings'>Terms & Conditions</p>
                    <p className='f-settings'>Privacy</p>
                    <p className='f-settings'>User Content Terms</p>
                    <p className='f-settings'>Site Map</p>
                </div>
            </div>

            <div className='footer-base'>
            </div>
        </div>
    )
};

export default Footer;
