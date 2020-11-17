import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
const Order = ({ order }) => {
  const { base, toppings } = order;
  console.log(order.base);
  return base === "" ? (
    <div className="container order">
      No order has been made. Please pick a base
    </div>
  ) : (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", stiffness: 600 }}
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <p>
        You ordered{" "}
        {base.charAt(0) === "A" ? "an" : base.charAt(0) === "I" ? "an" : "a"}{" "}
        {base} pizza with:
      </p>
      {toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      <h2>Your Pizza is on the way.</h2>
      <h2>Buon Appetito</h2>
    </motion.div>
  );
};
const mapStateToProps = (state) => {
  return {
    order: state.orderReducer,
  };
};

export default connect(mapStateToProps, null)(Order);
