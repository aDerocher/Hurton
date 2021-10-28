import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
// import { addToCart } from '../../store/cart';
import './../../styles/auth.css'


const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [errorsE, setErrorsE] = useState([]);
    const [errorsP, setErrorsP] = useState([]);
    const [hideErrors, setHideErrors] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const newErrorsE = []
        const newErrorsP = []
        
        if(email.length < 5 ) newErrorsE.push('Email must be longer')
        if(email.length > 250 ) newErrorsE.push('Email cannot exceed 250 characters')
        if(!email.includes('@') || !email.includes('.')) newErrorsE.push('Invalid email address')
        if(password.length > 24) newErrorsP.push('Password cannot exceed 25 characters')
        if(password.length < 8) {
            if(password.length === 0) {
                newErrorsP.push('Password must be at least 8 characters')
            } else {
                newErrorsP.push('Password must be at least 8 characters')
            }
        } 
        
        setErrorsE(newErrorsE)
        setErrorsP(newErrorsP)
    }, [email, password])

    const onLogin = async (e) => {
        e.preventDefault();
        setHideErrors(false)
        if(errors.length > 0 ){
            return
        }
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }

        localStorage.removeItem("cart");
        // handleLSCart()
    };
    // const handleLSCart = () => {
    //     let cart = localStorage.getItem('cart');
    //     if(!cart){ return }

    //     console.log(JSON.parse(cart))
    //     cart = JSON.parse(cart)

    //     // run a for...in loop
    //     for (let itemKey in cart){
    //         // create each item in the cart as a cart item, assign them to the user that just logged in
    //         let itemObj = cart[`${itemKey}`]
    //         const formData = {
    //             item_id: itemObj.item_id,
    //             item_name: itemObj.item_name,
    //             item_color: itemObj.item_color,
    //             item_size: itemObj.item_size,
    //             item_price: itemObj.item_price,
    //             quantity: itemObj.quantity,
    //         }
    //         dispatch(addToCart(formData))
    //         localStorage.removeItem("cart");
    //     }
    // }

    const updateEmail = (e) => { setEmail(e.target.value); };
    const updatePassword = (e) => { setPassword(e.target.value); };


    if (user) { return <Redirect to='/' />; }
    return (
        <div className='login-form-container'>
            <form onSubmit={onLogin}>
                <div className='auth-topper flex-row-cont'>
                    <h5 className='profile-title'>Sign In</h5>
                    <i className="fas fa-lock"></i>
                </div>
                <div hidden={hideErrors}>
                    {errors.map((error, ind) => (
                        <div key={ind}>
                            <p className='error'>• {error}</p>
                        </div>
                    ))}
                </div>
                <fieldset>
                    <legend>Email</legend>
                    <input
                    className='auth-field'
                    name='email'
                    type='text'
                    maxLength='250'
                    value={email}
                    onChange={updateEmail}
                    />
                </fieldset>
                <div hidden={hideErrors}>
                    {errorsE.map((error, ind) => (
                        <div key={ind}>
                            <p className='error'>• {error}</p>
                        </div>
                    ))}
                </div>
                {/* <label htmlFor='password'>Password</label> */}
                <fieldset>
                    <legend>Password</legend>
                    <input
                        className='auth-field'
                        maxLength='25'
                        name='password'
                        type='password'
                        value={password}
                        onChange={updatePassword}
                    />
                </fieldset>
                <div hidden={hideErrors}>
                    {errorsP.map((error, ind) => (
                        <div key={ind}>
                            <p className='error'>• {error}</p>
                        </div>
                    ))}
                </div>
                <button type='submit' className='auth-btn grey-green-btn' disabled={!hideErrors && errors.length > 0}>SIGN IN</button>
                <p>Don't have an account? <a className='auth-link' href="/sign-up">Create one now.</a></p>
            </form>
        </div>
    );
};

export default LoginForm;
