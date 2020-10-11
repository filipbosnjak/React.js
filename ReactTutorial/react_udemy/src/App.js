import React, { Component } from "react";
import "./App.css";
import Person from './Person'

class App extends Component {
  //In class-based components we have a defined state object
  state = {
    persons: [
      {
        name: 'Filip',
        age: 23
      },
      {
        name: 'Karla',
        age: 20
      },
      {
        name: 'Jane',
        age: 25
      }
    ],
    boolValue: false,
  };



  render() {
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </div>
    );
  }
}

export default App;
