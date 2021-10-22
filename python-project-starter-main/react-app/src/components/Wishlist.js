import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersWishlist, deleteWishlistItem } from '../store/wishlist';
import { addToCart } from '../store/cart';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function Wishlist() {
    const dispatch = useDispatch()
//   const [user, setUser] = useState({});
    const { userId }  = useParams();

    useEffect(() => {
        dispatch(getUsersWishlist(userId))
        console.log(userWishlist)
    }, [dispatch])
    
    const sessionUser = useSelector(state => state.session.user)
    const userWishlist = useSelector(state => state.wishlist)
    const userCart = useSelector(state => state.cart)

    const removeFromWishlist = (e, id) => {
        e.preventDefault();
        dispatch(deleteWishlistItem(id))
    }

    // handle moving items from the wishlist to the cart
    const wishlistToCart = (e, wl_item) => {
        e.preventDefault();
        //check if cart item exists
        let exists = userCart.filter((item) => {
            return ((wl_item.item_id === item.item_id &&
                wl_item.item_color === item.item_color) &&
                wl_item.item_size === item.item_size)
        })
        // if so, notify user its already there
        if (exists.length > 0){
            alert ('Item already in cart :)')
            return
        }
        // if not, add to cart and alert user
        const formData = {
            item_id: wl_item.item_id,
            item_name: wl_item.item_name,
            item_color: wl_item.item_color,
            item_size: wl_item.item_size,
            item_price: wl_item.item_price,
            quantity:1
        }
        alert ('Item added to cart :)')
        dispatch(addToCart(formData))
        return
    }

    return (
        <div className="profile-page-container">
            <ProfileSidebar />
            <div>
                <h2>Wishlist</h2>
                <ul>
                    {userWishlist?.map((wl_item, i) => (
                        <li key={i}>
                            <p>{wl_item.item_name}</p>
                            <button onClick={e=>removeFromWishlist(e, wl_item.id)}>X</button>
                            <button onClick={e=>wishlistToCart(e, wl_item)}>Add to Cart</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Wishlist;