import React from "react";

import { connect } from "react-redux";

export const DoubleCounter = ({ incDouble, decDouble, counter2 }) => {
  return (
    <div className="counter">
      <button onClick={incDouble}>Double inc</button>
      <div>{counter2}</div>
      <button onClick={decDouble}>Double dec</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter2: state.doubleReducer.counter2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incDouble: () => {
      dispatch({
        type: "INC",
      });
    },
    decDouble: () => {
      dispatch({
        type: "DEC",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoubleCounter);
