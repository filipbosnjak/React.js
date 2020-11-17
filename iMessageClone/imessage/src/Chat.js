import React, { useEffect, useState } from "react";
import MicNoneIcon from "@material-ui/icons/MicNone";
import "./Chat.css";
import db, { auth } from "./firebase";
import Message from "./Message";
import { selectChatId, selectChatName } from "./features/chatSlice";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
function Chat() {
  const [input, setInput] = useState("");
  const [messgages, setMessages] = useState([]);
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const user = useSelector(selectUser);

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
      messgage: input,
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

        <strong>DEtails</strong>
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          Logout
        </button>
      </div>
      {/* ----- Messages ----- */}
      <div className="chatMessages">
        {messgages.map(({ id, data }) => {
          return <Message key={id} contents={data} />;
        })}
      </div>

      {/* ----- Input ----- */}
      <div className="chatInput">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <MicNoneIcon className="chatMic" />
      </div>
    </div>
  );
}

export default Chat;
