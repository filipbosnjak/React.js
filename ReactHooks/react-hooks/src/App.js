import React from 'react';
import UseState from './hooks/UseState'
import './App.css';
import Person from './additional/Person'
import UsestateHook from './additional/UsestateHook';
import UseEffect from './hooks/UseEffect';


const App = () => {

  return (

    <div className="App">

      <div>Introducing React Hooks</div>
      
      <UseEffect/>

      {/*
      <Person/>
      <UsestateHook/>
      <UseStateH00k/>
      */}

    </div>
  );
}

export default App;
