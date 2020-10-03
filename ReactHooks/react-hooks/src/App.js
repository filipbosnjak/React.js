import React from 'react';
import UseState from './hooks/UseState'
import './App.css';
import Person from './Person'



const App = () => {

  return (

    <div className="App">

      <div>Introducing React Hooks</div>
      
      <UseState/>
      <Person/>

    </div>
  );
}

export default App;
