import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { editUser } from './../store/session'
import "./../styles/profile-edit.css"

function ProfileEdit(props) {
    const {userId} = useParams();
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)


    const [ newFirstName, setNewFirstName ] = useState('')
    const [ newLastName, setNewLastName ] = useState('')
    const [ newEmail, setNewEmail ] = useState('')
    const [ newAddress, setNewAddress ] = useState('')
    const [ showErrors, setShowErrors ] = useState(false)
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        let newErrors = []
        if (newFirstName.length < 2) newErrors.push("First Name must be longer");
        if (newLastName.length < 2) newErrors.push("Last Name must be longer");
        if (newEmail.length && !newEmail.includes("@")) newErrors.push("Please Enter a valid email");
        // if (newPassword !== confirmNewPassword) newErrors.push('Passwords must match');
        setErrors(newErrors);

    }, [ newFirstName, newLastName, newEmail])


    const checkViability = (attr, newAttr, formObj) => {
        if(newAttr !== null && newAttr !== undefined){
            console.log(attr)
            formObj[attr] = newAttr;
        }else {
            formObj[attr] = sessionUser[`${attr}`]
        }
    }
    const updateUser = (e) => {
        e.preventDefault()
        setShowErrors(true)
        let formData = {}
        formData.user_id = userId
        checkViability( 'firstName', newFirstName, formData )
        checkViability( 'lastName', newLastName, formData )
        checkViability( 'email', newEmail, formData )
        checkViability( 'address', newAddress, formData )
        console.log(sessionUser)
        console.log(formData)
        // dispatch(editUser(formData))
    }

    

    if (!props.show) {
        return null;
    }
    return (
        <div className="profile-edit-container" onClick={props.onClose}>
            <form className='profile-edit flex-col-cont' onClick={e=> e.stopPropagation()}>
                <h4 className='profile-title pr-sub-title'>EDIT INFO & PREFERENCES</h4>
                <div hidden={showErrors}>
                    {errors?.map((e, i) => (
                        <p key={i} className='error'> • {e}</p>
                    ))}
                </div>
                <br />
                <fieldset>
                    <legend>First Name</legend>
                    <input
                    className='auth-field'
                    placeholder={sessionUser.firstName}
                    type='text'
                    name='firstName'
                    onChange={e=> setNewFirstName(e.target.value)}
                    value={newFirstName}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Last Name</legend>
                    <input
                    className='auth-field'
                    placeholder={sessionUser.lastName}
                    type='text'
                    name='lastName'
                    onChange={e=> setNewLastName(e.target.value)}
                    value={newLastName}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input
                    className='auth-field'
                    placeholder={sessionUser.email}
                    type='text'
                    name='email'
                    onChange={e=> setNewEmail(e.target.value)}
                    value={newEmail}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Address</legend>
                    <input
                    className='auth-field'
                    placeholder={sessionUser?.address}
                    type='text'
                    name='email'
                    onChange={e=> setNewAddress(e.target.value)}
                    value={newAddress}
                    ></input>
                </fieldset>
                <p className='grey-label'> • Optional</p>
                <br />
                <br />
                <button className='grey-green-btn prof-update-btn' disabled={errors.length > 0 || showErrors} onClick={e=>updateUser(e)}>UPDATE</button>
            </form>
        </div>
    );
}
export default ProfileEdit;
