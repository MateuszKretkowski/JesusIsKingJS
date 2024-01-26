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
const defaultAvatar = require("../../Images/avatar.webp");

function SideBar() {
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

  return (
    <motion.div className="sidebar">
      <motion.div className="stripe" />
      <motion.div className="arrow" onClick={() => setIsOpen(!isOpen)} />
        <motion.div className="sidebar_container">
          <div className="account-wrapper">
            <div className="avatar-wrapper">
              <img className="avatar"  src={defaultAvatar} />
            </div>
            <div className="desc-wrapper-account">
              <h3 className="name">MATEUSZ KRETKOWSKI</h3>
              <h5 className="name desc">Fullstack Developer with a passion to Design and Code websites from Scratch!</h5>
              <h5 className="name where">Poland</h5>
            </div>
          </div>
          <div className="login-wrapper">
          {isSettingsOpen ?
          <Link to="/">
            <button className="login_btn link" onClick={() => { setIsOpen(!isOpen) }}>HOME</button>
          </Link>
          :
          <Link to="/settings">
            <button className="login_btn link" onClick={() => { setIsOpen(!isOpen) }}>PROFILE</button>
          </Link>
          }
          <SignIn />
          </div>
          
        </motion.div>
      </motion.div>
  );
}

export default SideBar;
