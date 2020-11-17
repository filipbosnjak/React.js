import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";

const Base = ({ bases, currentOrder, addBase }) => {
  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>

      <ul>
        {bases.map((base, index) => {
          return (
            <motion.li
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                default: {
                  duration: 0.5,
                },
                delay: index / 8,
              }}
              whileHover={{
                scale: 1.2,
                originX: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  delay: 0,
                },
              }}
              key={index}
              onClick={() => addBase(base)}
            >
              <span className={currentOrder.base === base ? "active" : ""}>
                {base}
              </span>
            </motion.li>
          );
        })}
      </ul>
      {currentOrder.base && (
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

const mapStateToProps = (state) => {
  return {
    bases: state.pizzeriaReducer.bases,
    currentOrder: state.orderReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBase: (base) => {
      dispatch({
        type: "ADD_BASE",
        payload: {
          base: base,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);
