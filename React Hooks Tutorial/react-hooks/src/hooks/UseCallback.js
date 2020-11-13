import React, { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
  const [num, setNum] = useState(1);
  const [theme, setTheme] = useState(true);

  const getItems = useCallback(() => {
    //Like this we dont recreate this function everytime component rerenders but only when num changes
    //This function is not changing but only the return value.

    return [num + 1, num + 2, num + 3];
  }, [num]);

  return (
    <div className={theme ? "light" : "dark"}>
      <form>
        <input
          type="text"
          placeholder="Pick a number..."
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
        />
      </form>
      <button
        onClick={() => {
          setTheme((currentTheme) => !currentTheme);
        }}
      >
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
