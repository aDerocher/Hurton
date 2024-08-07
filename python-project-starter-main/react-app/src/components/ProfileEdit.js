import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editUser } from "./../store/session";
import "./../styles/profile-edit.css";

function ProfileEdit(props) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  // All Error handling states and management
  const [newFirstName, setNewFirstName] = useState(sessionUser.firstName);
  const [newLastName, setNewLastName] = useState(sessionUser.lastName);
  const [newAddress, setNewAddress] = useState(sessionUser?.address);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(formErrors());
  }, [newFirstName, newLastName, newAddress]);

  const formErrors = () => {
    let newErrors = [];
    if (newFirstName.length < 2) newErrors.push("First Name must be longer");
    if (newFirstName.length > 50) newErrors.push("First Name must be shorter");
    if (newLastName.length < 2) newErrors.push("Last Name must be longer");
    if (newLastName.length > 50) newErrors.push("Last Name must be shorter");
    if (newAddress?.length < 4 && newAddress.length > 0)
      newErrors.push("Address must be longer");
    if (newAddress?.length > 50)
      newErrors.push("Address cannot exceed 50 characters");
    return newErrors;
  }

  // If the user doesn't enter anything in a field, make sure attr stays the same
  // TODO: refactoring. this could probably be handled on the backend more effectively
  const checkViability = (attr, newAttr, formObj) => {
    if (newAttr !== null && newAttr !== undefined) {
      formObj[attr] = newAttr;
    } else {
      formObj[attr] = sessionUser[`${attr}`];
    }
  };
  // TODO: Refactoring. See above
  const updateUser = (e) => {
    e.preventDefault();
    setShowErrors(true);
    if (errors.length > 0) return
    if (
      newFirstName === sessionUser.firstName &&
      newLastName === sessionUser.lastName &&
      newAddress === sessionUser.address
    ) {
      history.push(`/users/${sessionUser.id}`);
      // props.onClose()
    }
    let formData = {};
    formData.user_id = parseInt(userId);
    formData.email = sessionUser.email;
    checkViability("firstName", newFirstName, formData);
    checkViability("lastName", newLastName, formData);
    checkViability("address", newAddress, formData);

    dispatch(editUser(formData));

    setNewFirstName("");
    setNewLastName("");
    setNewAddress("");
    history.push(`/users/${sessionUser.id}`);
    // props.onClose()
  };

  const fakeModalClose = (e) => {
    e.preventDefault();
    history.push(`/users/${sessionUser.id}`);
  };

  return (
    // <div className="profile-edit-container" onClick={props.onClose}>
    //{/* <form className='profile-edit flex-col-cont' onClick={e=> e.stopPropagation()}> */}
    <div className="profile-edit-container" onClick={(e) => fakeModalClose(e)}>
      <form
        className="profile-edit flex-col-cont"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="profile-title pr-sub-title">EDIT INFO & PREFERENCES</h4>
        <div hidden={showErrors}>
          {errors?.map((e, i) => (
            <p key={i} className="error">
              {" "}
              • {e}
            </p>
          ))}
        </div>
        <br />
        <fieldset>
          <legend>First Name</legend>
          <input
            className="auth-field"
            placeholder={sessionUser.firstName}
            type="text"
            name="firstName"
            maxLength="50"
            onChange={(e) => setNewFirstName(e.target.value)}
            value={newFirstName}
          ></input>
        </fieldset>
        <fieldset>
          <legend>Last Name</legend>
          <input
            className="auth-field"
            placeholder={sessionUser.lastName}
            type="text"
            maxLength="50"
            name="lastName"
            onChange={(e) => setNewLastName(e.target.value)}
            value={newLastName}
          ></input>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <input
            className="auth-field"
            placeholder={sessionUser?.address}
            type="text"
            maxLength="50"
            name="address"
            onChange={(e) => setNewAddress(e.target.value)}
            value={newAddress}
          ></input>
        </fieldset>
        <p className="grey-label"> • Optional</p>
        <button
          className="grey-green-btn prof-update-btn"
          disabled={errors.length > 0 || showErrors}
          onClick={(e) => updateUser(e)}
        >
          UPDATE
        </button>
        <button
          className="grey-btn prof-update-btn"
          onClick={(e) => fakeModalClose(e)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
export default ProfileEdit;
