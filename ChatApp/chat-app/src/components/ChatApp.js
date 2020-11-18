import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const ChatApp = () => {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default ChatApp;
