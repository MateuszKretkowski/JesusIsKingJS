import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../Google Signin/config.js';
import { auth } from '../Google Signin/config.js';
import { updateDoc } from 'firebase/firestore';

export const useUserData = () => {
  const [userData, setUserData] = useState({
    name: '',
    description: '',
    from: '',
    links: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(false);

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

  return { userData, setUserData, isEditing, setIsEditing };
};