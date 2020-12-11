import React, { useState, createContext } from "react";

export const MovieContext = createContext(); //Whenever we want to use movie context we import it to that component

export const MovieProvider = (props) => {
  const [num, setNum] = useState(0);
  const [state, setState] = useState(
    //MovieProvider component provides the information to the components
    [
      { id: 1, name: "Movie 1", genre: "Genre 1", visible: true },
      { id: 2, name: "Movie 2", genre: "Genre 2", visible: true },
      { id: 3, name: "Movie 3", genre: "Genre 3", visible: true },
      { id: 4, name: "Movie 4", genre: "Genre 4", visible: true },
    ]
  );
  return (
    <MovieContext.Provider value={[state, setState, num, setNum]}>
      {/* Now anything wrapped in these will have access to the state above*/}
      {props.children}
    </MovieContext.Provider>
  );
};

//Usage:

//Importing useContext and Context component

//Based on the props passed (in this case: value={[value,setValue]}) we destructure it like this:

// const [state , setState] = useContext(MovieContext)
