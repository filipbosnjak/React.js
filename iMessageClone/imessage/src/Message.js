import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Message.css";

function Message(props) {
  const {
    id,
    contents: { timestamp, displayName, email, message, photo, uid },
  } = props;
  const user = useSelector(selectUser);
  return (
    <div className={`message ${user.email === email && "sender"}`}>
      <Avatar className="messagePhoto" src={photo} />
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
    </div>
  );
}

export default Message;
