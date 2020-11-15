import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        animate={{
          scale: [1, 1.2, 1, 1.1, 1, 1.05, 1],
        }}
        transition={{ type: "spring", stiffness: 5000 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 10px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(255,255,255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
