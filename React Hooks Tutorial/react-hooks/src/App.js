import { useState } from "react";
import "./App.css";
import UseEffect from "./hooks/UseEffect";
import UseState from "./hooks/UseState";
import UseReducer from "./hooks/UseReducer";
import TodoApp from "./hooks/TodoApp";
import UseCallback from "./hooks/UseCallback";
import UseMemo from "./UseMemoExample/UseMemo";

function App() {
  const [toggler, setToggler] = useState(true);

  return (
    <div className="App">
      {/* <UseState/>
      <button onClick={ () => {
        setToggler( (current) => {
          return !current
        })
      }}>Show/hide</button>
      {toggler && <UseEffect/>} */}
      {/* <TodoApp />
      <UseReducer /> */}
      {/* <UseCallback /> */}
      <UseMemo />
    </div>
  );
}

export default App;
