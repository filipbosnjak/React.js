import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Support from './pages/Support';
import Team from './pages/Team';

function App() {
  return (
    <React.Fragment>
      <Router>
      <div className="bg">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/products' component={Products}/>
          <Route path="/reports" component={Reports}/>
          <Route path='/support' component={Support}/>
          <Route path='/team' component={Team}/>
        </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
