import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import AddTodoFormContainer from "../containers/AddTodoFormContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodoFormContainer />
      </div>
    );
  }
}

export default App;
