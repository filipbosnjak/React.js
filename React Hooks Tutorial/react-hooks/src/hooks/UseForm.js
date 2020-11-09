import React, { useState } from "react";

export const UseForm = (initialObject) => {
  //Like this we can create our custom hook that looks like useState hook
  //This hook handles input onChange and sets the object values
  //This hook can be now used all over the place. And its worth noticing that it has no UI associated with it.
  //This way we encapsulated the logic and we can use it wherever we like
  const [object, setObject] = useState(initialObject);

  const setData = (e) => {
    setObject((currentObject) => {
      return { ...currentObject, [e.target.name]: e.target.value }; //With [e.target.name] we destructure the name of our html element
    });
  };

  return [object, setData];
};
