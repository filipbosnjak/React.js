import React from "react";

const Order = ({ pizza }) => {
  const { base, toppings } = pizza;
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {base} pizza with:</p>
      {toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
