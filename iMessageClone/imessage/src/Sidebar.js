import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

import "./Sidebar.css";
import { RateReviewOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <Avatar className="avatar" />
        <div className="input">
          <SearchIcon />
          <input type="text" name="" placeholder="Search..." />
        </div>
        <IconButton variant="outlined" className="inputButton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
