import React from "react";
import "./settings.css";
const defaultAvatar = require("../../Images/avatar.webp");

function Settings() {
  return (
    <div className="settings">
      <div className="settings_container">
        <div className="account-wrapper-settings">
          <div className="avatar-wrapper-settings">
            <img className="avatar" src={defaultAvatar} />
          </div>
          <div className="desc-wrapper-account-settings">
            <h3 className="title-settings">MATEUSZ KREDKA</h3>
            <h5 className="desc">
              Fullstack Developer with a passion to Design and Code websites
              from Scratch!
            </h5>
            <h5 className="desc link-settings">
                YEDIDTHIS.COM
            </h5>
            <h5 className="where link-settings">POLAND</h5>
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
