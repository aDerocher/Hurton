import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function ProfileEdit() {
    const {userId} = useParams();
    const sessionUser = useSelector(state => state.session.user)

    const [ newFirstName, setNewFirstName ] = useState(sessionUser.firstName)
    const [ newLastName, setNewLastName ] = useState(sessionUser.lastName)
    const [ newEmail, setNewEmail ] = useState(sessionUser.email)
    const [ newPassword, setNewPassword ] = useState('')
    const [ confirmNewPassword, setConfirmNewPassword ] = useState('')
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        let newErrors = []
        if (newFirstName.length < 2) newErrors.push("First Name must be longer");
        if (newLastName.length < 2)newErrors.push("Last Name must be longer");
        if (!newEmail.includes("@")) newErrors.push("Please Enter a valid email");
        if (newPassword !== confirmNewPassword) newErrors.push('Passwords must match');
        setErrors(newErrors);

    }, [ newFirstName, newLastName, newEmail, newPassword, confirmNewPassword])

    const updateUser = () => {

    }

    return (
        <div className="profile-page-container">
            <ProfileSidebar />
            <div>
                <form action={`/users/${sessionUser.id}`} method='patch'>
                    <h2>Edit Profile</h2>
                    <p>First Name</p> 
                    <input type='text'  value={newFirstName} placeholder={sessionUser.firstName}></input>
                    <p>Last Name {sessionUser.firstName}</p> 
                    <input type='text'  value={newLastName} placeholder={sessionUser.lastName}></input>
                    <p>Email</p> 
                    <input type='text'  value={newEmail} placeholder={sessionUser.email}></input>
                    <p>Password</p>
                    <input type='password' value={newPassword} ></input>
                    <p>Confirm Password</p>
                    <input type='password' value={confirmNewPassword} ></input>
                    <button onClick={updateUser()}>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default ProfileEdit;
