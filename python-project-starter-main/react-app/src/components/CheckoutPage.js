import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getCartItems, editCartItem } from '../store/cart'
// import {getAllItems} from '../store/items'
// import CartSidebar from './CartSidebar';
import './../styles/checkout.css'


const CheckoutPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    // make sure the cart in state is current to user(if user)
    useEffect(() => {
        dispatch(getCartItems(sessionUser?.id))
    }, [dispatch])

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
        if(!sessionUser){
            localStorage.removeItem('cart')
        } else {
            setHideErr(false)
            cart.forEach((item) => {
                dispatch(editCartItem(item.id, item.quantity, true))
            })
        }
        history.push(`/`)
    }
    // made this autofill thing. Gotta find a better way though cause things rings errors
    // let autofill = { id: "", firstName: "", lastName: "" }
    //     if (sessionUser){
    //     autofill.firstName = sessionUser.firstName
    //     autofill.lastName = sessionUser.lastName
    //     if (sessionUser.address){
    //         autofill.address = sessionUser.address
    //     }
    // }
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ card, setCard ] = useState('')
    const [ errors, setErrors ] = useState([])
    const [ hideErr, setHideErr ] = useState(true)

    useEffect(() => {
        let newErrors = []
        if(firstName.length < 2) newErrors.push('First name must be longer than 2 characters')
        if(lastName.length < 2) newErrors.push('Last name must be longer than 2 characters')
        if(card.length < 15 || card.length > 17) newErrors.push('Invalid Card Number')
        if(address?.length < 4 || address === null) newErrors.push('Invalid Address: Address is too short')
        setErrors(newErrors)
    }, [dispatch, firstName, lastName, address, card])
    const total = cart?.reduce((acc, item) => {
        return acc + item.item_price
    },0)

    return (
        <div className="content-width">
            <div className='checkout-top-title flex-row-cont'><h1>Secure Checkout</h1><i className="big-lock fas fa-lock"></i></div>
            <div className='checkout-page-container flex-row-cont'>
                <form className='checkout-left'>
                    <div className='checkout-brick'><p>Contact</p></div>
                    <p>More to be added here</p>
                    <div hidden={hideErr} className='errors-block'>
                        {errors?.map((e, i) => (
                            <div key={i}>
                                <p>{e}</p>
                            </div>
                        ))}
                    </div>
                    <div className='checkout-brick'><p>Delivery</p></div>
                    <form>
                        <div className='checkout-all-inputs'>
                            <div className='flex-row-cont checkout-box-split'>
                                <div className='checkout-box'>
                                    <span className='req-star' hidden={hideErr}>*</span>
                                    <input type='text' value={firstName} onChange={e=>setFirstName(e.target.value)} placeholder='First Name' maxLength='49' />
                                </div>
                                <div className='checkout-box'>
                                    <span className='req-star' hidden={hideErr}>*</span>
                                    <input type='text' value={lastName} onChange={e=>setLastName(e.target.value)} placeholder='Last Name' maxLength='49' />
                                </div>
                            </div>
                            <div className='checkout-box'>
                                <span className='req-star' hidden={hideErr}>*</span>
                                <input type='text' value={address} onChange={e=>setAddress(e.target.value)} placeholder='Address' maxLength='49' />
                            </div>
                            <div className='checkout-box'>
                                <span className='req-star' hidden={hideErr}>*</span>
                                <input type='text' value={card} onChange={e=>setCard(e.target.value)} placeholder='Credit Card' maxLength='15' />
                            </div>
                        </div>
                        
                        <div className='shipping-radio flex-row-cont'>
                            <input type='radio' name='shipping-radio' checked/>
                            <p><b>FREE </b> : 1-2 Business Days (Hurton Special Delivery)</p>
                        </div>
                        <div className='shipping-radio flex-row-cont'>
                            <input type='radio' name='shipping-radio'/>
                            <p><b>$77.00 </b> : 3-5 Business Days (Standard Air)</p>
                        </div>
                        <div className='shipping-radio flex-row-cont'>
                            <input type='radio' name='shipping-radio'/>
                            <p><b>$100.00 </b> : 7-12 Business Days (Standard Ground)</p>
                        </div>
                        <div className='shipping-radio flex-row-cont'>
                            <input type='radio' name='shipping-radio'/>
                            <p><b>$97.00 </b> : 4-6 Weeks (No Rush)</p>
                        </div>

                        <button
                            className='grey-green-btn sub-order-btn'
                            disabled={errors.length > 0}
                            onClick={e=> handleCheckoutSubmit(e)}>Submit Order
                        </button>
                    </form>
                </form>
                <div className='checkout-right'>
                    <h3>Your Order</h3>
                    <div><p>Subtotal</p><p>$ {total}</p></div>
                    <div><p>Shipping</p><p>FREE</p></div>
                    <div><p>Oregon Tax</p><p>$ 0</p></div>
                    <div><p>{total}</p></div>
                    <ul>
                        {cart?.map((cart_item, i) => (
                            <li key={i} id={cart_item.id}>
                                <p>{cart_item.item_name}</p>
                                <p>{cart_item.item_color}</p>
                                <p>{cart_item.item_price}</p>
                                <p>{cart_item.quantity}</p>
                                <div>
                                    <img src={cart_item.item_image} />
                                </div>
                                {/* TODO: add dropdown for adjusting quantity */}
                                {/* checking out should apply any changes made to the quantities. */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;