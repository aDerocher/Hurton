import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, editCartItem } from './../../store/cart';
import { addWishlistItem } from './../../store/wishlist';
import './../../styles/item-form.css'


const ItemForm = () => {
    // console.log(curItem)
    const dispatch = useDispatch()
    const usersCart = useSelector(state => state.cart)
    const sessionUser = useSelector(state => state.session?.user)
    const usersWishlist = useSelector(state => state.wishlist)
    const curItem = useSelector(state => state.items[0])
    
    
    
    
    // handle adding the item to a users wishlist ================
    const addItemToWishlist = (e, item) => {
        e.preventDefault()
        if(!sessionUser){
            alert("you must be logged in to add items to a wishlist!");
            return
        }
        let wl_exists = usersWishlist?.filter((i) => {
            return i.item_id === curItem.id
        })
        if(wl_exists.length > 0){return}
        const formData = {
            user_id: sessionUser.id,
            item_id: curItem.id,
            item_name: item.name,
            item_color: item.color,
            item_gender: item.gender,
            item_size: item.size,
            item_price: item.price,
            item_image: item.image1

        }
        dispatch(addWishlistItem(formData))
    }
    // handle adding an item to the users cart ===============
    const addItemToCart = (e, item) => {
        e.preventDefault()
        let uid = null
        if(sessionUser) uid = sessionUser.id
        const formData = {
            item_id: curItem.id,
            item_name: item.name,
            item_color: item.color,
            item_gender: item.gender,
            item_size: item.size,
            item_price: item.price,
            item_image: item.image1,
            quantity: quantity,
        }
        if (uid) {
            const existingCartItem = usersCart.filter((item)=>{
                if((item.item_id === formData.item_id && item.item_size === formData.item_size) && item.item_color === formData.item_color)
                return true
            })
            if (existingCartItem.length > 0) {
                existingCartItem[0].quantity +=1
                dispatch(editCartItem(existingCartItem[0].id, existingCartItem[0].quantity))
                return
            }
            dispatch(addToCart(formData))
            return
        }
        addToLocalCart(formData)
    }
    // // handle adding an item to the cart that is in local storage (if no session user)
    const addToLocalCart = (data) => {
        let cart = localStorage.getItem('cart');
        if(!cart){
            let cartStorage = window.localStorage;
            cartStorage.setItem('cart', JSON.stringify({}));
            cart = localStorage.getItem('cart');
        }
        console.log(JSON.parse(cart))
        cart = JSON.parse(cart)
        if (cart[`${data.item_id}_${data.item_color}_${data.item_size}`]){
            cart[`${data.item_id}_${data.item_color}_${data.item_size}`].quantity += data.quantity
        } else {
            cart[`${data.item_id}_${data.item_color}_${data.item_size}`] = data
        }
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    // for the form

    
    useEffect(() => {
        let newSizesArr = []
        if(curItem?.item_type === 1){
            switch (curItem?.gender){
                case ('Men'):
                    newSizesArr = [ 148, 152, 155, 158, 161 ];
                    break;
                case ('Women'):
                    newSizesArr = [ 139, 143, 146, 148, 150 ];
                    break;
                case ('Kids'):
                    newSizesArr = [ 119, 122, 125, 130 ];
                    break;
                default:
                    newSizesArr = [ 'error loading sizes' ];
            }
        } else {
            newSizesArr = ['S', 'M', 'L', 'XL']
        }
        setSizesArr(newSizesArr)
    }, [ dispatch, curItem ])

    const [ sizesArr, setSizesArr ] = useState([])
    const [ quantity, setQuantity ] = useState(1)
    const [ size, setSize ] = useState(curItem?.size)
    const [ color, setColor ] = useState()

    return (
        <div className='item-form-container'>
            <p className=''>{}</p>
            <p className=''>{curItem?.gender}'s {curItem?.name} *item type*</p>
            <p className=''>{curItem?.price}</p>
            <p className=''>*review data*</p>
            <p className=''>{curItem?.color}</p>
            
            <form>
                <p>selected size: {size}</p>
                {sizesArr?.map((s,i) => (
                    <div key={i} className='size-box'>
                        <label>{s}</label>
                        <input type='radio'
                            value={s}
                            name='size-sel'
                            onChange={e=>setSize(e.target.value)}
                            className='size-box'
                        />
                    </div>
                ))}
                <select name="cart-quantity" onChange={e=>setQuantity(e.target.value)} className='' id="">
                    <option className='def-option' disabled defaultValue='1'>1</option> 
                    <option value='1'>1</option> 
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                </select>
            </form>
            
            <div className='flex-row-cont'>
                <button className='grey-green-btn'
                onClick={e=>addItemToCart(e, curItem)}>
                    ADD TO CART
                </button>
                <button onClick={e=>addItemToWishlist(e, curItem)}>
                    &lt;3
                </button>
            </div>
            <button>Find My Size</button>
    </div>

    );
}

export default ItemForm;