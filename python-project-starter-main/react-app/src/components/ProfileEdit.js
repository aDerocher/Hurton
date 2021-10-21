import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';
import "./../styles/profile-page.css"

function ProfileEdit() {
    const {userId} = useParams();
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const [ newFirstName, setNewFirstName ] = useState(sessionUser.firstName)
    const [ newLastName, setNewLastName ] = useState(sessionUser.lastName)
    const [ newEmail, setNewEmail ] = useState(sessionUser.email)
    // const [ newPassword, setNewPassword ] = useState('')
    // const [ confirmNewPassword, setConfirmNewPassword ] = useState('')
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        let newErrors = []
        if (newFirstName.length < 2) newErrors.push("First Name must be longer");
        if (newLastName.length < 2)newErrors.push("Last Name must be longer");
        if (!newEmail.includes("@")) newErrors.push("Please Enter a valid email");
        // if (newPassword !== confirmNewPassword) newErrors.push('Passwords must match');
        setErrors(newErrors);

    }, [ newFirstName, newLastName, newEmail])

    const updateUser = (e) => {
        e.preventDefault()
        let formData = {}

        if(newFirstName !== null && newFirstName !== undefined){
            formData.firstName = newFirstName;
        }else {
            formData.firstName = sessionUser.firstName
        }
        if(newLastName !== null && newLastName !== undefined){
            formData.lastName = newLastName;
        }else{
            formData.lastName = sessionUser.lastName
        }
        if(newEmail !== null && newEmail !== undefined){
            formData.email = newEmail;
        }else {
            formData.email = sessionUser.email
        }
        // if(newPassword !== null && newPassword !== undefined){
        //     formData.password = newPassword;
        // }else {formData.password = sessionUser.password}
        // dispatch()
    }

    return (
        <div className="profile-page-container">
            <ProfileSidebar />
            <div>
                {/* <form action={`/users/${sessionUser.id}`} method='patch'> */}
                <form>
                    <h2>Edit Profile</h2>
                    <p>First Name</p> 
                    <input type='text'  value={newFirstName} onChange={e=>setNewFirstName(e.target.value)} placeholder={sessionUser.firstName}></input>
                    <p>Last Name {sessionUser.firstName}</p> 
                    <input type='text'  value={newLastName} onChange={e=>setNewLastName(e.target.value)} placeholder={sessionUser.lastName}></input>
                    <p>Email</p> 
                    <input type='text'  value={newEmail} onChange={e=>setNewEmail(e.target.value)} placeholder={sessionUser.email}></input>
                    {/* <p>Password</p>
                    <input type='password' value={newPassword} onChange={setNewPassword} ></input>
                    <p>Confirm Password</p>
                    <input type='password' value={confirmNewPassword} onChange={setConfirmNewPassword} ></input> */}
                </form>
                <button onClick={e=>updateUser(e)}>Submit</button>
            </div>
        </div>
    );
}
export default ProfileEdit;
