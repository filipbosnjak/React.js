import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Count = () => {
  const context = useContext(MovieContext);
  const num = context[2];
  return <div>{num}</div>;
};

export default Count;
