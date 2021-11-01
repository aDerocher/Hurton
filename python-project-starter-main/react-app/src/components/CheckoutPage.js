import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { useParams } from 'react-router';
import { getCartItems, editCartItem } from '../store/cart'
// import {getAllItems} from '../store/items'
// import CartSidebar from './CartSidebar';
import './../styles/checkout.css'


const CheckoutPage = (subtotalParams) => {
    const {subtotal} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    let starterAddress = ''
    if (sessionUser?.address) starterAddress = sessionUser.address;

    // make sure the cart in state is current to user(if user)
    useEffect(() => {
        dispatch(getCartItems(sessionUser?.id))
    }, [dispatch, sessionUser?.id])

    // if user: cart is state.cart | otherwise cart is localstorage
    let cart = useSelector(state => state.cart)
    if (cart?.length === 0){
        // look at local storage
        let cartStorage = window.localStorage;
        let ls_cart = cartStorage.getItem('cart');
        // is there a cart with items in it...?
        if (ls_cart !== null && ls_cart !== {}){
            // put those in an array, and return as cart
            ls_cart = JSON.parse(ls_cart)
            let newCart = []
            for (const key in ls_cart) {
                newCart.push(ls_cart[key])
            }              
            cart = newCart
        }
    }

    
    const handleCheckoutSubmit = (e) => {
        e.preventDefault()
        if(errors.length > 0){
            setHideErr(false)
            return
        }
        if(!sessionUser){
            localStorage.removeItem('cart')
        } else {
            setHideErr(false)
            cart.forEach((item) => {
                dispatch(editCartItem(item.id, item.quantity, true))
            })
        }
        history.push(`/thankyou`)
    }

    const [ email, setEmail ] = useState(sessionUser?.email)
    const [ firstName, setFirstName ] = useState(sessionUser?.firstName)
    const [ lastName, setLastName ] = useState(sessionUser?.lastName)
    const [ address, setAddress ] = useState(starterAddress)
    const [ card, setCard ] = useState('')
    const [ errors, setErrors ] = useState([])
    const [ hideErr, setHideErr ] = useState(true)

    useEffect(() => {
        if(firstName && lastName && email && card && address){setHideErr(false)}
        let newErrors = []
        if( !email?.includes('@') || !email.includes('.') ) newErrors.push("Invalid Email Address: must include '@' and '.'")
        if( email?.length < 5 ) newErrors.push("Invalid Email Address: too short")
        if( email?.length > 250 ) newErrors.push("Invalid Email Address: too long")
        if(firstName?.length < 2) newErrors.push('First name must be longer than 2 characters')
        if(firstName?.length > 50) newErrors.push('First name must be less than 50 characters')
        if(lastName?.length < 2) newErrors.push('Last name must be longer than 2 characters')
        if(lastName?.length > 50) newErrors.push('Last name must be less than 50 characters')
        if( !parseInt(card) || parseInt(card).toString().length < 15 ) newErrors.push('Invalid Card Number: Invalid characters')
        if( card.length > 15 ) newErrors.push('Invalid Card Number: Number too long')
        if( card.length < 15 ) newErrors.push('Invalid Card Number: Number not long enough')
        if(address?.length < 4 || address === null) newErrors.push('Invalid Address: Address is too short')
        if(address?.length > 50 || address === null) newErrors.push('Invalid Address: Address is too long')
        setErrors(newErrors)
    }, [dispatch, firstName, lastName, address, email, card])
    // const total = cart?.reduce((acc, item) => {
    //     return acc + item.item_price
    // },0)

    return (
        <div className="content-width">
            <div className='checkout-top-title flex-row-cont'><h1>Secure Checkout</h1><i className="big-lock fas fa-lock"></i></div>
            <div className='checkout-page-container flex-row-cont'>
                <form className='checkout-left'>
                    <div className='checkout-brick'><p>Contact</p></div>

                    <br />
                    <p className='grey-label' hidden={hideErr}><span className='req-star' >*</span> indicates required field</p>
                    <div className='checkout-box email-confirm checkout-email'>
                        <span className='req-star' hidden={hideErr}>*</span>
                        <input type='email'
                        value={email} onChange={e=>setEmail(e.target.value)}
                        placeholder='Email'
                        maxLength='250' />
                    </div>
                    <p className='grey-label email-confirm-text'>To confirm your order.</p>
                    <div className='flex-row-cont check-signup'>
                        <input type='checkbox' />
                        <p>Sign me up for promotion and product update emails (you can unsubscribe at any time).</p>
                    </div>


                    <div className='checkout-brick'><p>Delivery</p></div>
                    <div hidden={hideErr} className='errors-block'>
                        {errors?.map((e, i) => (
                            <p key={i}className='error'>• {e}</p>
                        ))}
                    </div>
                    <div className='checkout-all-inputs'>
                        <div className='flex-row-cont checkout-box-split'>
                            <div className='checkout-box'>
                                <span className='req-star' hidden={hideErr}>*</span>
                                <input type='text' value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='First Name' maxLength='50' />
                            </div>
                            <div className='checkout-box'>
                                <span className='req-star' hidden={hideErr}>*</span>
                                <input type='text' value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Last Name' maxLength='50' />
                            </div>
                        </div>
                        <div className='checkout-box'>
                            <span className='req-star' hidden={hideErr}>*</span>
                            <input type='text' value={address} onChange={e=>setAddress(e.target.value)} placeholder='Address' maxLength='50' />
                        </div>
                        <div className='checkout-box'>
                            <span className='req-star' hidden={hideErr}>*</span>
                            <input type='text' value={card} onChange={e=>setCard(e.target.value)} placeholder='Credit Card' maxLength='15' />
                        </div>
                    </div>
                    
                    <div className='shipping-radio flex-row-cont'>
                        <input type='radio' name='shipping-radio' value='0'  defaultChecked/>
                        <p><b>FREE </b> : 1-2 Business Days (Hurton Special Delivery)</p>
                    </div>
                    <div className='shipping-radio flex-row-cont'>
                        <input type='radio' name='shipping-radio' value='77' />
                        <p><b>$77.00 </b> : 3-5 Business Days (Standard Air)</p>
                    </div>
                    <div className='shipping-radio flex-row-cont'>
                        <input type='radio' name='shipping-radio' value='100' />
                        <p><b>$100.00 </b> : 7-12 Business Days (Standard Ground)</p>
                    </div>
                    <div className='shipping-radio flex-row-cont'>
                        <input type='radio' name='shipping-radio' value='97' />
                        <p><b>$97.00 </b> : 4-6 Weeks (No Rush)</p>
                    </div>

                    <button
                        className='grey-green-btn sub-order-btn dis'
                        disabled={!hideErr && errors.length > 0}
                        onClick={e=> handleCheckoutSubmit(e)}>Submit Order
                    </button>
                </form>
                <div className='checkout-right'>
                    <div className='checkout-brick checkout-brick-grey'><p>Your Order</p></div>
                    <div className='cart-side-sec'>
                    <div className='cart-mini-sec'>
                        <p>Subtotal</p>
                        <p>$ {subtotal}</p>
                    </div>
                    <div className='cart-mini-sec'>
                        <p>Shipping Standard</p>
                        <p>FREE</p>
                    </div>
                    <div className='cart-mini-sec'>
                        <p>Tax</p>
                        <p>$ 0.00</p>
                    </div>
                </div>

                <div className='cart-side-sec'>
                    <div className='checkout-mini-sec'>
                        <p><b>ORDER TOTAL</b></p>
                        <p><b>$ {subtotal}</b></p>
                    </div>
                </div>
                <br />
                <br />
                {cart?.map((item, i) => (
                    <div key={i} className='profile-item-card flex-row-cont'>
                        <div className='pic-section flex-row-cont'>
                            <img className='pic-image' src={item.item_image} alt={item.name}/>
                            <div className='pic-section pic-text flex-col-cont'>
                                <p className='profile-title pr-sub-title'>{item.item_gender}'s Hurton {item.item_name}</p>
                                <p className='grey-label'>Color: {item.item_color}</p>
                                {/* <p className='grey-label'><div className="sale-swatch" style={{backgroundColor: `${item.item_color}`}}></div></p> */}
                                <p className='grey-label'>Size: {item.item_size}</p>
                                <p className='grey-label'><strong>$ {item.item_price}.00</strong></p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='back-to-cart'>
                    <NavLink to='/cart'>BACK TO CART</NavLink>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;