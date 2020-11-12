import "./App.css";
import Counter from "./ components/Counter";
import DoubleCounter from "./ components/DoubleCounter";
import Form from "./ components/Form";

function App() {
  return (
    <div className="App">
      <Counter />
      <DoubleCounter />
      <Form />
    </div>
  );
}

export default App;
