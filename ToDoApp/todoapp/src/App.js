import React, {Component} from 'react';

import './App.css';

import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from "./components/Todos";


class App extends Component {
  
  //App-level state. We share this state with the components of our app
  state = {//  ->  Js object
    todos:[//  ->  Array of objects
      
      {id:1,title:'Todo 1 aFSADGS AFGFGSD FGSDFGSDFGDFSDDS',completed:false},
      {id:2,title:'Todo 2',completed:false},
      {id:3,title:'Todo 3',completed:true},

  ]
  }

  markComplete = (id) => {
    //console.log(id);
    this.setState({ todos: this.state.todos.map( (todo) => {//.map() - executes a given function on an every element of an array and returns new array
       if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo; //Now we can see in Chrome Dev Tools in the props how state is dynamicaly changing
    })});
  }

  delTodo = (id) => {
    this.setState({todos:this.state.todos.filter( (todo) => {
      return todo.id !== id;
      
    })})
    //console.log('clicked');
  }

  render(){
    return (

      <div className="App">
        
        {/* Here we add all of the components */}

        <div className="todos">

          <Header/>
          <AddTodo/>
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> {/*Passing todos to Todos class AS A PROP - property. We can console.log it in Todos class*/}
          <footer></footer>

        </div>
      </div>
       
  );}
}

export default App;
