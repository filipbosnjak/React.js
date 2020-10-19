import React from 'react';
import UseState from './hooks/UseState'
import './App.css';
import Person from './additional/Person'
import UsestateHook from './additional/UsestateHook';


const App = () => {

  return (

    <div className="App">

      <div>Introducing React Hooks</div>
      
      <UseState/>
      
      {/*
      <Person/>
      <UsestateHook/>
      <UseStateH00k/>
      */}

    </div>
  );
}

export default App;
