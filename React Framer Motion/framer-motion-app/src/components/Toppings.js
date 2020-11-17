import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { connect } from "react-redux";

const Toppings = (props) => {
  let toppings = props.toppings;
  const { addTopping, currentOrder } = props;
  console.log(currentOrder);
  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping, index) => {
          let spanClass = currentOrder.toppings.includes(topping)
            ? "active"
            : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.2,
                originX: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  delay: 0,
                },
              }}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                default: {
                  duration: 0.5,
                  delay: index / 8,
                },
              }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <motion.span className={spanClass}>{topping}</motion.span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <button className="order">Order</button>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    toppings: state.pizzeriaReducer.toppings,
    currentOrder: state.orderReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTopping: (topping) => {
      dispatch({
        type: "ADD_TOPPING",
        payload: {
          topping: topping,
        },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Toppings);
