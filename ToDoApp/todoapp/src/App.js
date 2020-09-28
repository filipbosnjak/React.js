import React, {Component} from 'react';

import './App.css';
import Todos from "./components/Todos";

class App extends Component {
  
  state = {//  ->  Js object
    todos:[//  ->  Array of objects
      
      {id:1,title:'Todo 1',completed:false},
      {id:2,title:'Todo 2',completed:false},
      {id:3,title:'Todo 3',completed:true},

  ]
  }
  render(){
    return (
      <div className="App">
        <div className="class">Hello World</div>
        <Todos todos = {this.state.todos}/> {/*Passing todos to Todos class AS A PROP - property. We can console.log it in Todos class*/}
      </div>
  );}
}

export default App;
