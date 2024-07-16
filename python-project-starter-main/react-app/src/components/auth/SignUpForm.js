import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { addToCart } from "../../store/cart";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [errorsHidden, setErrorsHidden] = useState(true);

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  //   const [dob, setDOB] = useState('');
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const newErrors = [];
    if (firstName.length < 2) newErrors.push("First Name must be longer");
    if (firstName.length < 2) newErrors.push("First Name must be longer");
    if (lastName.length > 50)
      newErrors.push("Last Name cannot exceed 50 characters");
    if (lastName.length > 50)
      newErrors.push("Last Name cannot exceed 50 characters");
    if (email.length < 5) newErrors.push("Email must be longer");
    if (email.length > 250)
      newErrors.push("Email cannot exceed 250 characters");
    if (!email.includes("@") || !email.includes("."))
      newErrors.push("Invalid email address");
    if (password.length > 24)
      newErrors.push("Password cannot exceed 25 characters");
    if (password.length < 8) {
      if (password.length === 0) {
        newErrors.push("Password must be at least 8 characters");
      } else {
        newErrors.push("Password must be at least 8 characters");
      }
    }
    if (password !== repeatPassword) newErrors.push("Passwords must match");
    setErrors(newErrors);
  }, [firstName, lastName, email, password, repeatPassword]);

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrorsHidden(false);
    if (errors.length > 0) {
      return;
    }
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data);
      }
      handleLSCart();
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
    return <Redirect to="/" />;
  }

  const handleLSCart = () => {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      return;
    }

    cart = JSON.parse(cart);

    // run a for...in loop
    for (let itemKey in cart) {
      // create each item in the cart as a cart item, assign them to the user that just logged in
      let itemObj = cart[`${itemKey}`];
      const formData = {
        item_id: itemObj.item_id,
        item_name: itemObj.item_name,
        item_color: itemObj.item_color,
        item_size: itemObj.item_size,
        item_price: itemObj.item_price,
        item_gender: itemObj.item_gender,
        item_image: itemObj.item_image,
        quantity: itemObj.quantity,
      };
      localStorage.removeItem("cart");
      dispatch(addToCart(formData));
    }
  };

  return (
    <form onSubmit={onSignUp} className="signup-form">
      <div className="auth-topper flex-row-cont">
        <h5 className="profile-title">Create Your Account</h5>
        <i className="fas fa-lock"></i>
      </div>
      <div hidden={errorsHidden}>
        {errors.map((error, ind) => (
          <div key={ind}>
            <p className="error">• {error} </p>
          </div>
        ))}
      </div>
      <fieldset>
        <input
          className="auth-field"
          placeholder="First Name"
          type="text"
          name="firstName"
          maxLength="50"
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </fieldset>
      <fieldset>
        <input
          className="auth-field"
          placeholder="Last Name"
          type="text"
          name="lastName"
          maxLength="50"
          onChange={updateLastName}
          value={lastName}
        ></input>
      </fieldset>
      <fieldset>
        <input
          className="auth-field"
          placeholder="Email"
          type="text"
          name="email"
          maxLength="250"
          onChange={updateEmail}
          value={email}
        ></input>
      </fieldset>
      <fieldset>
        <input
          className="auth-field"
          placeholder="Password"
          type="password"
          name="password"
          maxLength="25"
          onChange={updatePassword}
          value={password}
        ></input>
      </fieldset>
      <fieldset>
        <input
          className="auth-field"
          placeholder="Confirm Password"
          type="password"
          maxLength="25"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </fieldset>
      <button
        className="grey-green-btn auth-btn dis"
        disabled={!errorsHidden && errors.length > 0}
        type="submit"
      >
        SIGN UP
      </button>
      <p>
        Already have an account?{" "}
        <a className="auth-link" href="/login">
          Sign in.
        </a>
      </p>
    </form>
  );
};

export default SignUpForm;
