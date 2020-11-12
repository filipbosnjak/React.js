import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import AddTodo from "./AddTodo";
import ClearAll from "./ClearAll";
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <ClearAll />
        <Todos />
      </div>
    );
  }
}

export default App;
