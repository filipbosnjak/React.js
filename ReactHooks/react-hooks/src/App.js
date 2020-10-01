import React, {useState} from 'react';

import './App.css';


/*
function timeExpensiveFunction() {
  
}
*/
const App = () => {

  const [count, setCount] = useState(10)  /* () => timeExpensiveFunction(); We call it like so cause now the func is called on only first rendering*/

  return (
    <div className="App">
      <div>Introducing React Hooks</div>
      <div>{count}</div>
    </div>
  );
}

export default App;
