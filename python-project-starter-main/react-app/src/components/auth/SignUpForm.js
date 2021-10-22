import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { addToCart } from '../../store/cart';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp(firstName, lastName, email, password));
            if (data) {
                setErrors(data)
            }
            handleLSCart()
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

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
    }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
