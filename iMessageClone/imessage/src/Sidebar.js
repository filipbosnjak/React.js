import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

import "./Sidebar.css";
import { RateReviewOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import db from "./firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  const url = user.user.photo;
  console.log(url);
  const addChat = () => {
    const chatName = prompt("Enter new chat name: ");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="header">
        <Avatar src={url} className="avatar" referrerPolicy="no-referrer" />
        <div className="input">
          <SearchIcon />
          <input type="text" name="" placeholder="Search..." />
        </div>
        <IconButton
          variant="outlined"
          className="inputButton"
          onClick={addChat}
        >
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="chats">
        {chats.map(({ id, data: { chatName } }) => {
          return <SidebarChat key={id} id={id} chatName={chatName} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
