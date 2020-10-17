import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import {Home , About} from './Components'; //Without currly braces when working with export default, We put {} around the name when we are working with export
import './App.css'

const App = () => {
  
  
  return (
    <div className="app">
    <BrowserRouter>   {/*Without exact on home rendered just home but on about rendered home and about */}
      <Route path="/"  component={Home}/>{/*React will render all the routes that match. / and /About match but if we put exact it tells it they dont actually match */}
      <Route path  ="/about" component={About}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
