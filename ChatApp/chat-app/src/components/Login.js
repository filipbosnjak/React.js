import React from "react";
import ForumTwoToneIcon from "@material-ui/icons/ForumTwoTone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { motion } from "framer-motion";

import { auth, provider } from "../firebase";

const Login = () => {
  const bigIcon = {
    width: "500px",
    height: "500px",
  };
  const smallIcon = {
    width: "300px",
    height: "300px",
  };
  const matches = useMediaQuery("(min-width:600px)");
  //console.log(matches);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <ForumTwoToneIcon
          style={matches ? bigIcon : smallIcon}
          className="messagesIcon"
        />
      </div>
      <div className="loginTitle">Chat App</div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 700 }}
        // onClick={signIn}
        className="loginButton"
        onClick={signIn}
      >
        Login
      </motion.button>
    </div>
  );
};

export default Login;
