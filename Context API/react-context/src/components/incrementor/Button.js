import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Button = () => {
  const context = useContext(MovieContext); //Like subscribing in redux - mapStateToProps and mapDispatchToProps
  const setNum = context[3];
  return (
    <div>
      <button
        onClick={() => {
          setNum((currentNum) => currentNum + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Button;
