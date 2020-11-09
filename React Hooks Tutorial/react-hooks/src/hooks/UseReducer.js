import React, { useReducer } from "react";

const UseReducer = () => {
  const initalState = {
    count: 0,
  };

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return 0;
    }
  };

  const [state, dispatch] = useReducer(reducer, initalState); // reducer - func for state updating/manipulation and initial state

  //const [count, setCount] = useState(0);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div className="useReducer">
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <div>{state.count}</div>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseReducer;
