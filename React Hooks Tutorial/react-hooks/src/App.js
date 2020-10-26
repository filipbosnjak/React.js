import { useState } from 'react';
import './App.css';
import UseEffect from './hooks/UseEffect';
import UseState from './hooks/UseState';

function App() {

  const [toggler , setToggler] = useState(true)

  return (
    <div className="App">
      <UseState/>
      <button onClick={ () => {
        setToggler( (current) => {
          return !current
        })
      }}>Show/hide</button>
      {toggler && <UseEffect/>}
    </div>
  );
}

export default App;
