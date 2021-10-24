import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from './../store/session'
import './../styles/navbar.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart)
    
    // const [ navHide, setNavHide ] = useState()
    // const [ navWiden, setWiden ] = useState()
    
    const loginDemo = () => {
        dispatch(login('demo@hurton.com','password'));
        localStorage.removeItem("cart");
    }

    // useEffect(() => {
        
    // }, [])
    window.addEventListener('scroll', (e)=> {
        e.preventDefault();
        // viable possible solution 1 ===============================
        let rect = document.body.getBoundingClientRect()
        // console.log(rect.y)
        // viable possible solution 2 ===============================
        // if (window.scrollY > 0){
        //     console.log('chickeeeeen')
        // }

        // needed??????????????????????????????????????????????????
        // let navCont = document.getElementById("nav-container");
        // let hLogo = document.getElementById("h-logo");
        // let textLogo = document.getElementById("text-logo");
        // let cart1 = document.getElementById("my-cart-1");
        // let cart2 = document.getElementById("my-cart-2");

        // navCont.classList.toggle('nav-on-scroll', window.scrollY > 0);
        // textLogo.classList.toggle('widen-this', window.scrollY > 0);
        // hLogo.classList.toggle('hide-this', window.scrollY > 0);
        // cart1.classList.toggle('hide-this', window.scrollY > 0);
        // cart2.classList.toggle('hide-this', window.scrollY === 0);

    })

  return (
    <nav>
        <div className='meta-nav-container'>
            <div className='meta-nav'>
                <div className='meta-nav-section'>
                    <NavLink to='/' exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                        <p className='boldish'>HURTON</p>
                    </NavLink>

                    <p>ANON</p>
                    <p className='small-text'>Blog</p>
                    <p className='small-text'>Sustainability</p>
                </div>

                <div className='meta-nav-section'>
                    <p className='green-shipping'>FREE SHIPPING ON ALL ORDERS</p>
                </div>

                <div className='meta-nav-section'>
                    {sessionUser &&
                        <NavLink to={`/users/${sessionUser?.id}/wishlist`} exact={true} activeClassName='active' style={{ textDecoration: 'none', color: `var(--link-green)`}}>
                            <button className='btn-simple heart-btn-simple'><i class="far fa-heart"></i></button>
                        </NavLink>
                    }
                    <p>Stores</p>
                    {!sessionUser &&
                        <>
                        <NavLink to={`/login`} exact={true} activeClassName='active' style={{ textDecoration: 'none' }}>
                            <button className='btn-simple heart-btn-simple'><i class="far fa-heart"></i></button>
                        </NavLink>
                        <div>
                            <button disabled={sessionUser} onClick={loginDemo}>Demo</button>
                        </div>
                        </>
                    }
                    {sessionUser &&
                        <>
                        <NavLink to={`/users/${sessionUser?.id}`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <p>{sessionUser?.firstName} </p>
                        </NavLink>
                        <p>
                            <LogoutButton />
                        </p>
                        </>
                    }
                    {!sessionUser &&
                        <>
                        <NavLink to='/login' exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <button disabled={sessionUser}>Login</button>
                        </NavLink>

                        <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <button disabled={sessionUser}>Sign Up</button>
                        </NavLink>
                        </>
                    }
                    <NavLink to={`/cart`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                        <button><i className="fas fa-shopping-cart"></i></button>
                    </NavLink>
                </div>
            </div>
        </div>
        <div id='nav-container'>
            <div className='nav content-width'>
                {/*  <div className='nav-section l-correct'>Burton Logo</div> */}
                <div className='nav-img-section'>
                    <img id="h-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-logo-2.png" alt="Hurton" />
                    <img id="text-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-text-logo.png" alt="HurtonText" />
                </div>
                <div className="nav-section nav-links">
                        <NavLink to={`/shop`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <p>Snowboarding</p>
                        </NavLink>
                        <p>Women</p>
                        <p>Men</p>
                        <p>Kids</p>
                        <p>Accessories & Bags</p>
                        <p>Sale</p>
                        <p>MINE77</p>
                </div>
                <div className='nav-section nav-search-cont'>
                    <div className='search-outline'>
                        <input className='nav-search' placeholder='Search' type="text"></input>
                        <button className='nav-search-btn'>&#128269;</button>
                    </div>
                    <p id='my-cart-2' className='hide-this'>🛒 0</p>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
