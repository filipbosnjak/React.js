import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {Home , About , Contact, Posts} from './Components'; //Without currly braces when working with export default, We put {} around the name when we are working with export
import './App.css'

const App = () => {
  
  
  return (
    <div className="app">
    <BrowserRouter>   {/*Without exact on home rendered just home but on about rendered home and about */}
      <Switch> {/*Switch makes sure that only one route is rendered at once. Renders first one that matches*/}
        <Route path="/" exact component={Home}/>{/*React will render all the routes that match. / and /About match but if we put exact it tells it they dont actually match */}
        <Route path  ="/about" exact component={About}/>
        <Route path = '/contact' exact component={Contact}/>
        <Route path = '/posts/:id' exact component={Posts}/>
        <Route path = '/' render={() => <div>404</div>}/> {/*Renders only if none of the routes is matched */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
