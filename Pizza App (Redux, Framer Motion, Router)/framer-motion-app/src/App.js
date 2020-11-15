import "./App.css";
import Header from "./components/Header";
import Base from "./components/Base";
import Order from "./components/Order";
import Toppings from "./components/Toppings";
import Home from "./components/Home";

import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base: base });
  };
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]; //If topping not in an array add it
    } else {
      newToppings = pizza.toppings.filter((item) => {
        return item !== topping;
      });
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className="App">
      <Header />
      {/* <Router> */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/base">Base</Link>
        <Link to="/toppings">Toppings</Link>
        <Link to="/order">Order</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route exact path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route exact path="/order">
          <Order pizza={pizza} />
        </Route>
      </Switch>
      {/* </Router> */}
    </div>
  );
};

export default App;
