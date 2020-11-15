import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";

const Base = (props) => {
  const bases = ["Classic", "Thin & Crispy", "Thic Crust"];
  const { addBase, pizza } = props;
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>

      <ul>
        {bases.map((base) => {
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={pizza.base === base ? "active" : ""}>
                {base}
              </span>
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 10px rgb(255,255,255)",
                boxShadow: "0px 0px 10px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;
