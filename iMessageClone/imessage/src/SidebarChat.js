import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="chat">
      <Avatar />
      <div className="chatInfo">
        <h3>Channel Name</h3>
      </div>
    </div>
  );
}
export default SidebarChat;
