import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useUserData } from '../Google Signin/useUserData';
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
import { useNavigate } from 'react-router-dom';

const Modal = ({  showModal, setShowModal }) => {
    const { userData, setUserData, isEditing, setIsEditing } = useUserData();
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        if (isEditing) {
          // Zapisz dane gdy użytkownik kończy edycję
          if (auth.currentUser) {
            const userId = auth.currentUser.uid;
            const userDocRef = doc(db, "users", userId);
            await updateDoc(userDocRef, userData);
          }
        }
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

      const handleShowingModal = () => {
        setShowModal(!showModal);
      }

      const handleSavingChanges = () => {
        handleButtonClick();
        handleShowingModal();
        const timer2 = setTimeout(() => {
            window.location.reload();
          }, 1000);
      }    
  
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };
    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                className='backdrop'
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <motion.div className='modal' variants={modal}>
                        <motion.div className='modal_container'>
                            <motion.div className='avatar-wrapper-settings'>
                                <motion.img />
                            </motion.div>
                            <motion.div className='text-wrapper'>

                                <motion.div className='input-wrapper'>
                                    <motion.h2 className='input-title'>NAME</motion.h2>
                                    
                                    <motion.input 
                                    type='text'
                                    name='name'
                                    value={userData.name}
                                    onChange={handleInputChange}
                                    className='settings-input'
                                    />
                                </motion.div>

                                <motion.div className='input-wrapper'>
                                    <motion.h2 className='input-title'>DESCRIPTION</motion.h2>
                                    
                                    <motion.input 
                                    type='text'
                                    name='description'
                                    value={userData.description}
                                    onChange={handleInputChange}
                                    className='settings-input'
                                    />
                                </motion.div>

                                <motion.div className='input-wrapper'>
                                    <motion.h2 className='input-title'>LINK</motion.h2>
                                    
                                    <motion.input 
                                    type='text'
                                    name='links'
                                    value={userData.links}
                                    onChange={handleInputChange}
                                    className='settings-input'
                                    />
                                </motion.div>

                                <motion.div className='input-wrapper'>
                                    <motion.h2 className='input-title'>LOCATION</motion.h2>
                                    
                                    <motion.input 
                                    type='text'
                                    name='from'
                                    value={userData.from}
                                    onChange={handleInputChange}
                                    className='settings-input'
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div className='modal_action-wrapper'>
                                <motion.button onClick={handleSavingChanges}>APPLY CHANGES</motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
