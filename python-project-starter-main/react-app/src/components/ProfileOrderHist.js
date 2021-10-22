import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"
import { getOrderHistory } from './../store/session'

function ProfileOrderHist() {
    const {userId} = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrderHistory(userId))
    }, [dispatch])
    const pastItems = useSelector(state => state.session.user.order_history)
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="profile-page-container">
            <ProfileSidebar />
            <div>
                <h2>Order History Page</h2>
                <ul>
                    {pastItems?.map((item, i) => (
                        <div key={i}>
                            <p>{item.item_name}</p>
                            <div>
                                <img src={item.item_image} />
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ProfileOrderHist;
