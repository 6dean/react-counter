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
            onClick={() => {
              setCounter(counter - 1);
            }}
            className={counter === 0 && "undisplay"}
          >
            -
          </button>

          <div className="counter-screen">{counter}</div>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
            className={counter >= 10 && "undisplay"}
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
