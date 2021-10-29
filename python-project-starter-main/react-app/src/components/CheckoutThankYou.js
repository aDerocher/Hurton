import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./../styles/thankyou.css"

function CheckoutThankYou() {

    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="splash-page-container">

            <div className='splash-photo-container-thankyou'>
                <h2 className='splash-title'>Thanks for your Order!</h2>
                <p className='splash-text'>Have a great season!</p>
                <div className='splash-btns-cont'>
                    <NavLink to="/" className="github-link">
                        <button className='splash-btn'><p className='thankyou-btn'>Hurton Home</p></button>
                    </NavLink>
                    {!sessionUser && 
                    <NavLink to="/sign-up" className="github-link">
                        <button className='splash-btn'><p className='thankyou-btn'>Create An Account</p></button>
                    </NavLink>
                    }
                    {sessionUser && 
                    <NavLink to={`/users/${sessionUser.id}/order-history`} className="github-link">
                        <button className='splash-btn'><p className='thankyou-btn'>My Order History</p></button>
                    </NavLink>
                    }
                </div>
            </div>

    
        </div>
    );
}

export default CheckoutThankYou;
