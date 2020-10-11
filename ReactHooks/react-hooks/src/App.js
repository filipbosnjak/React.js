import React from 'react';
import UseState from './hooks/UseState'
import './App.css';
import Person from './Person'
import UsestateHook from './UsestateHook';



const App = () => {

  return (

    <div className="App">

      <div>Introducing React Hooks</div>
      
      <UseState/>
      <Person/>
      <UsestateHook/>

    </div>
  );
}

export default App;
