import React from 'react';
import { NavLink } from 'react-router-dom';
import './../styles/navbar.css'

const NavBarSimple = () => {
    
     
  return (
    <nav>
        <div className='meta-nav-container'>
           
        </div>
        <div id='nav-container'>
            <div className='nav content-width'>
                <div className='nav-img-section'>
                    <NavLink to='/' exact={true} activeClassName='active'>
                    <img id="h-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-logo-2.png" alt="Hurton" />
                    <img id="text-logo" className='hurton-nav-logo' src="https://hurton.s3.us-west-2.amazonaws.com/Hurton-downloadedImages/hurton-text-logo.png" alt="HurtonText" />
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBarSimple;
