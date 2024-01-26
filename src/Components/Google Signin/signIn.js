import React, { useEffect, useState } from 'react'
import { auth, provider } from "./config.js";
import { signInWithPopup } from "firebase/auth";


function SignIn() {
  
  const [user, setUser] = useState(null);
  const handleClick = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUser(user);
      localStorage.setItem("email", user.email);
      console.log("LOG ON")
    }).catch((error) => {
      console.log("AN ERROR HAS ACCURED. TRY AGAIN.")
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("email");
      console.log("LOG OFF")
    }).catch((error) => {
      console.log("AN ERROR HAS ACCURED. TRY AGAIN.")
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setUser({ email: storedEmail });
    }
  }, []);
  

  return (
    <div>
      {user ? 
      <button className="login_btn login" onClick={handleSignOut} >LOG OFF</button>
      :
      <button className="login_btn login" onClick={handleClick} >LOG IN WITH GOOGLE</button>
      }
    </div>
  )
}

export default SignIn
