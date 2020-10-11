import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
