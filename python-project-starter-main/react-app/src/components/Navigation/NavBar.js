import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { login } from '../../store/session'
import { getCartItems } from '../../store/cart';
import './../../styles/navbar.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // const cart = useSelector(state => state.cart)

    // const [ navHide, setNavHide ] = useState()
    // const [ navWiden, setWiden ] = useState()

    const loginDemo = () => {
        dispatch(login('demo@hurton.com','password'));
        dispatch(getCartItems(1))
        localStorage.removeItem("cart");
    }

    // ======= KEEP! ==================
    // This will be used on implimentation of a dynamic searchbar.
    // Burton.com's searchbar shrinks and then sits fixed on scroll.
    // this is the start of that implimentation. Still experimental.

    // useEffect(() => {
    // }, [])
    // window.addEventListener('scroll', (e)=> {
    //     e.preventDefault();
        // viable possible solution 1 ===============================
        // let rect = document.body.getBoundingClientRect()
        // console.log(rect.y)
        // viable possible solution 2 ===============================
        // if (window.scrollY > 0){
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

    // })

  return (
    <nav>
        <div className='meta-nav-container'>
            <div className='meta-nav'>
                <div className='meta-nav-section'>
                    <NavLink to='/' exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                        <p className='boldish'>HURTON</p>
                    </NavLink>

                    {/* <p className='dead-link'>ANON</p> */}
                    {/* <p className='small-text dead-link'>Blog</p> */}
                    <NavLink to='/about' style={{ color: `var(--link-green)`}}> <p className='small-text github-link'>About Hurton</p></NavLink>
                </div>

                <div className='meta-nav-section'>
                    {/* <p className='green-shipping'>FREE SHIPPING ON ALL ORDERS</p> */}
                </div>

                <div className='meta-nav-section'>
                    {sessionUser &&
                        <NavLink to={`/users/${sessionUser?.id}/wishlist`} exact={true} activeClassName='active' style={{ textDecoration: 'none', color: `var(--link-green)`}}>
                            <button className='btn-simple heart-btn-simple'><i className="far fa-heart"></i><span> </span> Wishlist</button>
                        </NavLink>
                    }
                    {/* <p className='dead-link'>Stores</p> */}
                    {!sessionUser &&
                        <>
                        <NavLink to={`/login`} exact={true} activeClassName='active' style={{ textDecoration: 'none', color: `var(--link-green)` }}>
                            <button className='btn-simple heart-btn-simple'><i className="far fa-heart"></i><span> </span> Wishlist</button>
                        </NavLink>
                        <div>
                            <button disabled={sessionUser} className='demo-btn' onClick={loginDemo}>Demo</button>
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
                    <NavLink to='/' exact={true} activeClassName='active'>
                    <img id="h-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-logo-2.png" alt="Hurton" />
                    <img id="text-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-text-logo.png" alt="HurtonText" />
                    </NavLink>
                </div>
                <div className="nav-section nav-links">
                        <NavLink to={`/shop`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <h3 className='green-link'>Shop</h3>
                        </NavLink>
                        {/* <NavLink to={`/shop`} exact={true} activeClassName='active' style={{ textDecoration: 'underline', color: `var(--link-green)`}}>
                            <p>Snowboarding</p>
                        </NavLink>
                        <p className='dead-link'>Women</p>
                        <p className='dead-link'>Men</p>
                        <p className='dead-link'>Kids</p>
                        <p className='dead-link'>Accessories & Bags</p>
                        <p className='dead-link'>Sale</p>
                        <p className='dead-link'>MINE77</p> */}
                </div>
                <div className='nav-section nav-search-cont'>
                    <div className='temp-search-outline flex-row-cont'>
                        <p>Not a Searchbar</p>
                        {/* <input className='nav-search' placeholder='Search' type="text"></input> */}
                        {/* <button className='nav-search-btn'>&#128269;</button> */}
                    </div>
                    {/* <p id='my-cart-2' className='hide-this'>🛒 0</p> */}
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
