import React, {useEffect} from "react";
import Navbar from './Components/navBar/navbar';
import Header from './Components/Header/header';
import SideBar from "./Components/SideBar/sidebar";
import Settings from "./Components/Settings/settings.js";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence, animate, stagger } from "framer-motion";
import './App.css';

function App() {

  return (
<Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Header />
            </>
          } />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
