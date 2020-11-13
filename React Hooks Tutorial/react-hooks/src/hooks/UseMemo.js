import React, { useState, useMemo } from "react";
import { Comp } from "./Comp";

function UseMemo() {
  const [prop, setProp] = useState("");
  const [text, setText] = useState("");
  const [num, setNum] = useState(1);
  const slowFunction = (num = 1) => {
    for (let i = 0; i < 1000000000; i++) {} //We can notice a delay/lag in the whole component
    return num + 1;
  };
  const slow = useMemo(() => {
    //Like this the only lag is when we update our num. Otherwise the result is cached in useMemo
    //And slowFunction is reevaluated only when the num changes
    return slowFunction();
  }, [num /* , text */]); //If we added text like this lag would be onChange when we type in a form

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setProp(text);
        }}
      >
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <Comp prop={prop} />
      <button onClick={() => setNum(slowFunction(num))}>Inc</button>
      <div>{num}</div>
    </div>
  );
}

export default UseMemo;
