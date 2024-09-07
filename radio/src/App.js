import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [studies, setStudies] = useState('Elementary School');

  function changeStudies(event) {
    setStudies(event.target.value);
  }

  return (
    <div >
      <p>
        <input type='radio' value="Elementary School" checked={studies === 'Elementary School'} onChange={changeStudies} />
        Elementary School
      </p>
      <p>
        <input type='radio' value="Middle School" checked={studies === 'Middle School'} onChange={changeStudies} />
        Middle School
      </p>
      <p>
        <input type='radio' value="High School" checked={studies === 'High School'} onChange={changeStudies} />
        High School
      </p>
      <p>
        <input type='radio' value="University" checked={studies === 'University'} onChange={changeStudies} />
        University
      </p>

      <p>
        Selected studies: {studies}
      </p>
    </div>
  );
}

export default App;
