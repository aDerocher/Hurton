import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersWishlist, deleteWishlistItem } from '../store/wishlist';
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

    const removeFromWishlist = (e, id) => {
        e.preventDefault();
        dispatch(deleteWishlistItem(id))
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
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Wishlist;