import logo from './logo.svg';
import './App.css';
import Dice from './Dice.js';
import Count from './Count.js';
import { useState } from 'react';

function App() {

  const [numbers, setNumbers] = useState([0, 0, 0]);

  const [counter, setCounter] = useState(0);

  const vector = Array(3);

  function randomizer() {

    for (let x = 0; x < vector.length; x++) {
      vector[x] = Math.trunc(Math.random() * 6) + 1;
    }

    setNumbers(vector);
  }

  function sumCounter() {

    setCounter(counter + 1);
  }



  return (
    <div>

      {numbers.map(v => {
        return (
          <Dice value={v} />
        )
      })
      }

      <Count val={counter}></Count>

      <button onClick={randomizer}>Genered Values</button>

      <br />

      <button onClick={sumCounter}>Increase Counter</button>

    </div>
  );
}

export default App;
