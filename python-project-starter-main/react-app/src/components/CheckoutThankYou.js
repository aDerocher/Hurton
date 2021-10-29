import React from 'react';
import "./../styles/thankyou.css"

function CheckoutThankYou() {

    return (
        <div className="splash-page-container">

            <div className='splash-photo-container-thankyou'>
                <h2 className='splash-title'>Thanks for your Order!</h2>
                <p className='splash-text'>Have a great season shredding!</p>
                <div className='splash-btns-cont'>
                    <a href="https://github.com/aDerocher" target="_blank" className="github-link">
                        <button className='splash-btn'><i className="fab fa-github"></i> <p className='thankyou-btn'> Github</p></button>
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-derocher-54003789/" target="_blank" className="github-link">
                        <button className='splash-btn'><i className="fab fa-linkedin"></i> <p className='thankyou-btn'>Linkedin</p></button>
                    </a>
                    <a href="mailto:am.derocher@gmail.com" className="github-link">
                        <button className='splash-btn'><i className="far fa-envelope"></i> <p className='thankyou-btn'>Email</p></button>
                    </a>
                </div>
            </div>

    
        </div>
    );
}

export default CheckoutThankYou;
