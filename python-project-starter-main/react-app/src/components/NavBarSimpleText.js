import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from './../store/session'
import './../styles/navbar.css'

const NavBarSimple = () => {
    const dispatch = useDispatch()
    
    
    const loginDemo = () => {
        dispatch(login('demo@hurton.com','password'));
        localStorage.removeItem("cart");
    }

    // window.addEventListener('scroll', (e)=> {
    //     e.preventDefault();
    //     // viable possible solution 1 ===============================
    //     let rect = document.body.getBoundingClientRect()
    //     // console.log(rect.y)
    //     // viable possible solution 2 ===============================
    //     // if (window.scrollY > 0){
    //     //     console.log('chickeeeeen')
    //     // }

    //     // needed??????????????????????????????????????????????????
    //     // let navCont = document.getElementById("nav-container");
    //     // let hLogo = document.getElementById("h-logo");
    //     // let textLogo = document.getElementById("text-logo");
    //     // let cart1 = document.getElementById("my-cart-1");
    //     // let cart2 = document.getElementById("my-cart-2");

    //     // navCont.classList.toggle('nav-on-scroll', window.scrollY > 0);
    //     // textLogo.classList.toggle('widen-this', window.scrollY > 0);
    //     // hLogo.classList.toggle('hide-this', window.scrollY > 0);
    //     // cart1.classList.toggle('hide-this', window.scrollY > 0);
    //     // cart2.classList.toggle('hide-this', window.scrollY === 0);

    // })

  return (
    <nav>
        <div className='meta-nav-container-text'>
            <p>FREE SHIPPING ON ALL ORDERS</p>
        </div>
        <div id='nav-container'>
            <div className='nav content-width'>
                <div className='nav-img-section'>
                    <NavLink to='/' exact={true} activeClassName='active'>
                    <img id="text-logo" className='hurton-nav-large-text-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-text-logo.png" alt="HurtonText" />
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBarSimple;
