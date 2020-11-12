import React, { Component } from "react";
import { connect } from "react-redux";

export class Counter extends Component {
  render() {
    const { increment, decrement } = this.props;

    return (
      <div className="counter">
        <button onClick={increment}>Increment</button>
        <div>{this.props.counter}</div>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({
        type: "INCREMENT",
      });
    },
    decrement: () => {
      dispatch({
        type: "DECREMENT",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//connect connects components to a store and makes a subscription
//connect(mapStateToProps , mapDispatchToProps) returns a function that takes components as argumnets

//Here we send to the args components everything that is mapped in a mapStateToProps
//We can then use it as props
