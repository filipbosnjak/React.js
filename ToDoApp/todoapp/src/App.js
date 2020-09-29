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
        
        {/* Here we add all of the components */}
        <div className="todos">
        <header>TodoApp</header>
        <div className="pre"></div>
          <Todos todos = {this.state.todos}/> {/*Passing todos to Todos class AS A PROP - property. We can console.log it in Todos class*/}
        <footer></footer>
        </div>
      </div>
       
  );}
}

export default App;
