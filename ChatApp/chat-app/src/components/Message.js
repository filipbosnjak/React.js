import React from "react";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Message = ({ id, message, user }) => {
  const { email } = user;
  return (
    // <div className={`message ${user.email === email && "sender"}`}>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`message ${message.email === email && "sender"}`}
    >
      <Avatar className="messagePhoto" src={message.photo} />
      <p>{message.message}</p>
      <small>{new Date(message.timestamp?.toDate()).toLocaleString()}</small>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps, null)(Message);
