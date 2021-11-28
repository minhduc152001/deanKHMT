import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar({admin}) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">6</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">8</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src={admin.profilePic}
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
