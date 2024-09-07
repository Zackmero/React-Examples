import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [day, setDay] = useState('Monday');

  function changeDay(event) {
    setDay(event.target.value)
  }

  return (
    <div >
      <p>
        <select value={day} onChange={changeDay}>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>
      </p>
      <hr />
      <p>
        The day selected is: {day}
      </p>

    </div>
  );
}

export default App;
