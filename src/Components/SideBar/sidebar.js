import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import SignIn from "../Google Signin/signIn.js";
import "./sidebar.css";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Settings from '../Settings/settings.js';
import { useUserData } from '../Google Signin/useUserData.js';
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
const defaultAvatar = require("../../Images/avatar.webp");

function SideBar() {
  const { userData, setUserData, isEditing, setIsEditing } = useUserData();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 90 : 0 }, { duration: 0.2 });
    
  });
  useEffect(() => {
    animate(".sidebar", { width: isOpen ? 300 : 50 },       {
      type: "linear",
      duration: 0.2,
    });
  })
  useEffect(() => {
    animate(".sidebar_container", { opacity: isOpen ? 1 : 0, width: 300 },       {
      duration: 0.5,
      stagger: 2
    });
  })
  
  useEffect(() => {
  animate(".App", { backgroundColor: isOpen ? "#000000B3" : "#f1f0ea" },{
    duration: 0.7,
  });
})

useEffect(() => {
  isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
})

const [ isSettingsOpen, setIsSettingsOpen ] = useState(false)
const location = useLocation();
useEffect(() => {
  if (location.pathname === '/settings') {
    console.log(isSettingsOpen);
    setIsSettingsOpen(true)
  }
  else {
    console.log(isSettingsOpen);
    setIsSettingsOpen(false)
  }
})

console.log(auth.currentUser)

  return (
    <motion.div className="sidebar">
      <motion.div className="stripe" />
      <motion.div className="arrow" onClick={() => setIsOpen(!isOpen)} />
        <motion.div className="sidebar_container">
          <div className="account-wrapper">
            <div className="avatar-wrapper">
              <img className="avatar"  src={defaultAvatar} />
            </div>
            {auth.currentUser ?
            <div className="desc-wrapper-account">
              <h2 className="name">{userData.name}</h2>
              <h2 className="name desc">{userData.desc}</h2>
              <h2 className="name from">{userData.from}</h2>
            </div>
            :
            <h1>Siema</h1>
            }
          </div>
          <div className="login-wrapper">
            {auth.currentUser ? (
    isSettingsOpen ? (
      <Link to="/">
        <motion.button className="login_btn link" onClick={() => setIsOpen(!isOpen)}>HOME</motion.button>
      </Link>
    ) : (
      <Link to="/settings">
        <motion.button className="login_btn link" onClick={() => setIsOpen(!isOpen)}>PROFILE</motion.button>
      </Link>
    )
  ) : (
    <h1></h1>
  )}
          <SignIn />
          </div>
          
        </motion.div>
      </motion.div>
  );
}

export default SideBar;
