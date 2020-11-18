import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import { motion } from "framer-motion";

import db, { auth } from "../firebase";
import firebase from "firebase";

import { connect } from "react-redux";

const Chat = ({ chatId, chatName, user }) => {
  const [input, setInput] = useState("");
  const [messgages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      dispalyName: user.displayName,
    });
  };
  return (
    <div className="chat">
      {/* ----- Header ----- */}
      <div className="chatHeader">
        <h4>
          To: <span className="channelName">{chatName}</span>
        </h4>
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 700 }}
          className="logoutButton"
          onClick={() => {
            auth.signOut();
          }}
        >
          Logout
        </motion.button>
      </div>
      {/* ----- Messages ----- */}
      <div className="chatMessages">
        {messgages.map(({ id, data }) => {
          return <Message key={id} message={data} />;
        })}
      </div>

      {/* ----- Input ----- */}
      <div className="chatInput">
        <form onSubmit={chatId ? sendMessage : () => alert("<- Pick a chat")}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={chatId ? sendMessage : () => alert("<- Pick a chat")}
          >
            Send Message
          </button>
        </form>
        <MicNoneIcon className="chatMic" />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    chatName: state.chatReducer.chatName,
    chatId: state.chatReducer.chatId,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(Chat);
