import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

import SidebarChat from "./SidebarChat";

import db from "../firebase";

const Sidebar = (props) => {
  const photoUrl = props.user.photo;
  const id = props.user.id;
  const [chats, setChats] = useState([]);
  const addChat = () => {
    const chatName = prompt("Enter your chat name: ");
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
        <Avatar
          className="avatar"
          src={photoUrl}
          referrerPolicy="no-referrer"
        />
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
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
