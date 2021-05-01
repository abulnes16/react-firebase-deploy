import { useState } from "react";
import "./App.css";
import { Fab } from "./components/Fab/Fab";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter app</h1>
      <p className="counter-title">El contador es </p>
      <p className="counter">{counter}</p>
      <div className="fab-container">
        <Fab
          text="-1"
          onClick={() => {
            setCounter(counter - 1);
          }}
        />
        <Fab
          text="+1"
          onClick={() => {
            setCounter(counter + 1);
          }}
        />
      </div>
    </div>
  );
}

export default App;
