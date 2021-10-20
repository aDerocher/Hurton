import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from './../store/session'
import './../styles/navbar.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const items = useSelector(state => state.items)


    const loginDemo = () => {
        dispatch(login('demo@demo.com','password'));
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
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li hidden={!sessionUser}>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
