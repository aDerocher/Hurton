import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from './../store/session'
import './../styles/navbar.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cart)


    const loginDemo = () => {
        dispatch(login('demo@hurton.com','password'));
    }

  return (
    <nav>
      <ul>
        <li>
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/shop' exact={true} activeClassName='active'>
                Shop
            </NavLink>
        </li>
        <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
                <button disabled={sessionUser}>Login</button>
            </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            <button disabled={sessionUser}>Sign Up</button>
          </NavLink>
        </li>
        <li>
            <button disabled={sessionUser} onClick={loginDemo}>Demo</button>
        </li>
        {sessionUser &&
            <li>
                <NavLink to={`/users/${sessionUser?.id}`} exact={true} activeClassName='active'>
                    My Profile
                </NavLink>
            </li>
        }
        {sessionUser &&    
            <li>
                <LogoutButton />
            </li>
        }
        <li>
            <NavLink to={`/cart`} exact={true} activeClassName='active'>
                <button><i className="fas fa-shopping-cart"></i></button>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
