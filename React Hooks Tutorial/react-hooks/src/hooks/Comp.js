import React, { memo, useState } from "react";

export const Comp = memo(({ prop }) => {
  const [color, setColor] = useState(true);
  console.log("updated"); //Without useMemo this component is rerendering everytime we type in useMM
  return (
    <div className={color ? "blue" : "green"}>
      <button onClick={() => setColor((current) => !current)}>Click</button>
      <div>{prop}</div>
    </div>
  );
});
