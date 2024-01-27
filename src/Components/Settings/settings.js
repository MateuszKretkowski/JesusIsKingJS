import React, { useState, useEffect } from 'react';
import "./settings.css";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
const defaultAvatar = require("../../Images/avatar.webp");

function Settings() {

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    description: '',
    from: '',
    links: '',
    image: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("No user document found!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleButtonClick = async () => {
    if (isEditing) {
      // Zapisz dane gdy użytkownik kończy edycję
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, userData);
      }
    }
    setIsEditing(!isEditing); // Przełącz stan edycji
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="settings">
      <div className="settings_container">
        <div className="account-wrapper-settings">
          <div className="avatar-wrapper-settings">
            <img className="avatar-settings" src={defaultAvatar} />
          </div>
          <div className="desc-wrapper-account-settings">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="title-settings"
            />
            ) : (
              <h3 className="title-settings">{auth.currentUser ? userData.name : "USER NOT LOGGED IN"}</h3>
            )}
            {isEditing ? (
            <input
              type="text"
              name="description"
              value={userData.description}
              onChange={handleInputChange}
              className="title-settings"
            />
            ) : (
            <h2 className="">{auth.currentUser ? userData.description : "USER NOT LOGGED IN"}</h2>
            )}
            <div className="links-wrapper">
            {isEditing ? (
            <input
              type="text"
              name="links"
              value={userData.links}
              onChange={handleInputChange}
            />
            ) : (
              <a className="desc link-settings" href={`https://${userData.links}`}>
                <h5 className="desc link-settings">{auth.currentUser ? userData.links : "USER NOT LOGGED IN"}</h5>
              </a>
            )}
              <a className="desc link-settings">
                <h5 className="desc link-settings">MESSAGE</h5>
              </a>
              {isEditing ? (
            <input
              type="text"
              name="where"
              value={userData.from}
              onChange={handleInputChange}
              className="title-settings"
            />
            ) : (
              <h5 className="where">{auth.currentUser ? userData.from : "USER NOT LOGGED IN"}</h5>
            )}
            </div>
          </div>
        </div>
        {auth.currentUser ?
        <div className='helper-wrapper'>
          <button className="action-wrapper edit-wrapper" onClick={handleButtonClick}>
            <h5 className="edit">EDIT</h5>
          </button>
        </div>
        :
        <h1></h1>
        }
      </div>
    </div>
  );
}

export default Settings;
