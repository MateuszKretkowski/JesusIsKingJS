import React, { useState, useEffect } from 'react';
import "./settings.css";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
import { useUserData } from '../Google Signin/useUserData.js';
import { motion, AnimatePresence, animate, stagger, useAnimation } from "framer-motion";
import Modal from './Modal.js';
const defaultAvatar = require("../../Images/avatar.webp");

function Settings() {
  const { userData, setUserData, isEditing, setIsEditing } = useUserData();
  const [ showModal, setShowModal ] = useState(false)


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
              <motion.h3 className="title-settings"
                variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}


              >{auth.currentUser ? userData.name : "USER NOT LOGGED IN"}</motion.h3>
            <motion.h2 className=""
                variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
            >{auth.currentUser ? userData.description : "USER NOT LOGGED IN"}</motion.h2>
            <div className="links-wrapper">
              <motion.a className="desc link-settings" href={`https://${userData.links}`}
                            variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
                <h5 className="where">{auth.currentUser ? userData.links : "USER NOT LOGGED IN"}</h5>
              </motion.a>
              <motion.a className="desc link-settings"
                              variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
                <h5 className="where">MESSAGE</h5>
              </motion.a>
              <motion.a className="desc link-settings" href={`https://${userData.links}`}
                              variants={variantsText}
                initial={controls}
                animate={controls}
                exit={controls}
              >
              <motion.h5 className="where">{auth.currentUser ? userData.from : "USER NOT LOGGED IN"}</motion.h5>
              </motion.a>
            </div>
          </div>
        </div>
        {auth.currentUser ?
        <div className='helper-wrapper'>
          <motion.button className="action-wrapper" onClick={() => setShowModal(true)}>
            <h5 className="edit">EDIT YOUR ACCOUNT</h5>
          </motion.button>
        </div>
        :
        <h1></h1>
        }
       <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

export default Settings;
