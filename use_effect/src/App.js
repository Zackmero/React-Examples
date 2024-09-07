import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [text, setText] = useState('');


  useEffect(() => { document.title = text}, [text]);


  function change(e) {
    setText(e.target.value);
  }

  return (
    <div >
      <input type='text' onChange={change} />
      <p>{text}</p>
    </div>
  );
}

export default App;
