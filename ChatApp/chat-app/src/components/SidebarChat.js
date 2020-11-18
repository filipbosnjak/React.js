import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import db from "../firebase";
import { motion } from "framer-motion";
import moment from "moment";

const SidebarChat = ({ chatName, id, setChat }) => {
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setChatInfo(snapshot.docs.map((doc) => doc.data()));
      });
  }, [id]);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="sidebarChat"
      onClick={() => {
        setChat(chatName, id);
      }}
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebarChatInfo">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {moment(
            new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()
          ).fromNow()}
        </small>
      </div>
    </motion.div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setChat: (chatName, chatId) => {
      dispatch({
        type: "SET_CHAT",
        payload: {
          chatId: chatId,
          chatName: chatName,
        },
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(SidebarChat);
