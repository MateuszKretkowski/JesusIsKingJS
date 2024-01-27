import React, { useState, useEffect } from 'react';
import "./settings.css";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
import { useUserData } from '../Google Signin/useUserData.js';
import { motion, AnimatePresence, animate, stagger, useAnimation } from "framer-motion";
const defaultAvatar = require("../../Images/avatar.webp");

function Settings() {
  const { userData, setUserData, isEditing, setIsEditing } = useUserData();

  const handleButtonClick = async () => {
    if (isEditing) {
      // Zapisz dane gdy użytkownik kończy edycję
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, userData);
      }
    }
    const timer = setTimeout(() => {
      setVisibility();
    }, 1000); // Zakładamy opóźnienie 1 sekundę
    const timer2 = setTimeout(() => {
      setIsEditing(!isEditing);
    }, 1500);

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // FRAMER MOTION

  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false)

  const setVisibility= () => {
    setIsVisible(!isVisible)
  }

  const variantsText = {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 0, scale: 0 },
    exit: { opacity: 0, scale: 0 },
  };
  
  const variantsInput = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    isVisible ? controls.start('visible') : controls.start('hidden');
    console.log(isVisible)
  })

  const handleBothActions = () => {
    handleButtonClick();
  }

  return (
    <div className="settings">
      <div className="settings_container">
        <div className="account-wrapper-settings">
          <motion.div className="avatar-wrapper-settings"
           variants={variantsText}
           initial={controls}
           exit={controls}
          >
            <img className="avatar-settings" src={defaultAvatar} />
          </motion.div>
          <div className="desc-wrapper-account-settings">
          {isEditing ? (
            <motion.input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="title-settings"
              variants={variantsInput}
              initial={controls}
              animate={controls}
              exit={controls}
            />

            ) : (

              <motion.h3 className="title-settings"
                variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}


              >{auth.currentUser ? userData.name : "USER NOT LOGGED IN"}</motion.h3>

            )}
            {isEditing ? (
            <motion.input
              type="text"
              name="description"
              value={userData.description}
              onChange={handleInputChange}
              className="title-settings"
              variants={variantsInput}
              initial={controls}
              animate={controls}
              exit={controls}
            />
            ) : (
            <motion.h2 className=""
                            variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
            >{auth.currentUser ? userData.description : "USER NOT LOGGED IN"}</motion.h2>
            )}
            <div className="links-wrapper">
            {isEditing ? (
            <motion.input
              type="text"
              name="links"
              value={userData.links}
              onChange={handleInputChange}
              variants={variantsInput}
              initial={controls}
              animate={controls}
              exit={controls}
            />
            ) : (
              <motion.a className="desc link-settings" href={`https://${userData.links}`}
                            variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
                <h5 className="where">{auth.currentUser ? userData.links : "USER NOT LOGGED IN"}</h5>
              </motion.a>
            )}
              <motion.a className="desc link-settings"
                              variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
                <h5 className="where">MESSAGE</h5>
              </motion.a>
              {isEditing ? (
            <motion.input
              type="text"
              name="where"
              value={userData.from}
              onChange={handleInputChange}
              className="title-settings"
              variants={variantsInput}
              initial={controls}
              animate={controls}
              exit={controls}
            />
            ) : (
              <motion.a className="desc link-settings" href={`https://${userData.links}`}
                              variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
              <motion.h5 className="where">{auth.currentUser ? userData.from : "USER NOT LOGGED IN"}</motion.h5>
              </motion.a>
            )}
            </div>
          </div>
        </div>
        {auth.currentUser ?
        <div className='helper-wrapper'>
          <motion.button className="action-wrapper edit-wrapper" onClick={handleBothActions}>
            <h5 className="edit">EDIT</h5>
          </motion.button>
        </div>
        :
        <h1></h1>
        }
      </div>
    </div>
  );
}

export default Settings;
