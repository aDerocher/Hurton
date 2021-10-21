import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { addToCart } from '../../store/cart';

const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
        handleLSCart()
    };

    const handleLSCart = () => {

        let cart = localStorage.getItem('cart');
        if(!cart){ return }

        console.log(JSON.parse(cart))
        cart = JSON.parse(cart)

        // run a for...in loop
        for (let itemKey in cart){
            // create each item in the cart as a cart item, assign them to the user that just logged in
            let itemObj = cart[`${itemKey}`]
            const formData = {
                item_id: itemObj.item_id,
                item_name: itemObj.item_name,
                item_color: itemObj.item_color,
                item_size: itemObj.item_size,
                item_price: itemObj.item_price,
                quantity: itemObj.quantity,
            }
            dispatch(addToCart(formData))
            localStorage.removeItem("cart");
        }

            
        // if (cart[`${data.item_id}_${data.item_color}_${data.item_size}`]){
        //     cart[`${data.item_id}_${data.item_color}_${data.item_size}`].quantity += data.quantity
        // } else {
        //     cart[`${data.item_id}_${data.item_color}_${data.item_size}`] = data
        // }
        // window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    const updateEmail = (e) => { setEmail(e.target.value); };
    const updatePassword = (e) => { setPassword(e.target.value); };


    if (user) { return <Redirect to='/' />; }
    return (
        <div>
            <button onClick={e=>handleLSCart(e)}>handleCartTester</button>
            <form onSubmit={onLogin}>
                <div>
                    {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                    ))}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                    />
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
