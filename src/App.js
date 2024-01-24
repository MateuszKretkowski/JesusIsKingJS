import React, {useEffect} from "react";
import Navbar from './Components/navBar/navbar';
import Header from './Components/Header/header';
import SideBar from "./Components/SideBar/sidebar"
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import './App.css';

function App() {

  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
