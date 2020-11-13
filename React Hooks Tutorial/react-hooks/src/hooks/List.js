import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("updated...");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default List;
