import React, {Component} from 'react';

import './App.css';

import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from "./components/Todos";

//For random id generation
import {v4 as uuid} from 'uuid';


class App extends Component {
  
  //App-level state. We share this state with the components of our app
  state = {//  ->  Js object
    todos:[//  ->  Array of objects
      
      {id:uuid(),title:'Todo 1',completed:false},
      {id:uuid(),title:'Todo 2',completed:false},
      {id:uuid(),title:'Todo 3',completed:true},

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

  addTodo = (title) => {
    this.setState({//We pass an object here fyi
      todos:[...this.state.todos,{//Here goes ne object
        id:uuid(),//this.state.todos.length, -> like this we get a next available position in an array
        title,
        completed:false
      }]
    })
  }

  render(){
    return (

      <div className="App">
        
        {/* Here we add all of the components */}

        <div className="todos">

          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <div className="pre"></div>
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> {/*Passing todos to Todos class AS A PROP - property. We can console.log it in Todos class*/}
          <footer></footer>
          <div className="footer">
            <p>Find the app code on my <a href="https://github.com/filipbosnjak/React.js/tree/master/ToDoApp" target="_blank">Github</a> page</p>
            <p> Copyright &copy; 2020 Filip Bošnjak</p>
          </div>


        </div>
      </div>
       
  );}
}

export default App;
