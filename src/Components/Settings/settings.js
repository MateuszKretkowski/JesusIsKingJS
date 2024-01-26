import React from "react";
import "./settings.css";
import { auth } from "firebase/auth";
const defaultAvatar = require("../../Images/avatar.webp");

function Settings() {
  return (
    <div className="settings">
      <div className="settings_container">
        <div className="account-wrapper-settings">
          <div className="avatar-wrapper-settings">
            <img className="avatar-settings" src={defaultAvatar} />
          </div>
          <div className="desc-wrapper-account-settings">
            <h3 className="title-settings">MATEUSZ KREDKA</h3>
            <h2 className="">
              Fullstack Developer with a passion to Design and Code websites
              from Scratch!
            </h2>
            <div className="links-wrapper">
              <a className="desc link-settings">
                <h5 className="desc link-settings">YEDIDTHIS.COM</h5>
              </a>
              <a className="desc link-settings">
                <h5 className="desc link-settings">MESSAGE</h5>
              </a>
              <h5 className="where">POLAND</h5>
            </div>
          </div>
        </div>
        <div className="helper-wrapper">
          <h5 className="edit">EDIT</h5>
        </div>
      </div>
    </div>
  );
}

export default Settings;
