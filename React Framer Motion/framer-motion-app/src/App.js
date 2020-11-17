import "./App.css";
import Header from "./components/Header";
import Base from "./components/Base";
import Order from "./components/Order";
import Toppings from "./components/Toppings";
import Home from "./components/Home";

import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <Link to="/~fbosnjak/PizzaApp/">Home</Link>
          <Link to="/base">Base</Link>
          <Link to="/toppings">Toppings</Link>
          <Link to="/order">Order</Link>
        </nav>

        <Switch>
          <Route exact path="/~fbosnjak/PizzaApp/" component={Home} />
          <Route path="/base">
            <Base />
          </Route>
          <Route path="/toppings">
            <Toppings />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
