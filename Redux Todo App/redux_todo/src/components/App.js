import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import AddTodo from "./AddTodo";
import ClearAll from "./ClearAll";
import Todos from "./Todos";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <ClearAll />
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default App;
