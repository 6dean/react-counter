import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header>
        <p>React Counter</p>
      </header>
      <div className="my-counter">
        <div className="container">
          <button
            disabled={counter !== 0 ? false : true}
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>

          <div className="counter-screen">{counter}</div>

          <button
            disabled={counter !== 10 ? false : true}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>

        <div className="reset-button">
          <button onClick={() => setCounter(0)} className="reset">
            RESET
          </button>
        </div>
      </div>
      <footer>
        <p>Made by Dean</p>
      </footer>
    </>
  );
}

export default App;
