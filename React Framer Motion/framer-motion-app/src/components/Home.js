import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home container">
      <motion.h2
        className="home-title"
        animate={{
          scale: [1, 1.2, 1, 1.1, 1, 1.05, 1],
        }}
        transition={{ type: "spring", stiffness: 5000 }}
      >
        Welcome to Peperoncini Pizzeria
      </motion.h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 10px rgb(255,255,255)",
            boxShadow: "0px 0px 10px rgb(255,255,255)",
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
