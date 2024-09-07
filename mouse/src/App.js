import logo from './logo.svg';
import './App.css';
import Cursor from './Cursor';
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(true);

  function hide() {
    setVisible(false);
  }
  function show() {
    setVisible(true);
  }

  return (
    <div >
      {visible ? <Cursor /> : <p>The component is hidden</p>}

      {visible === true ? <button onClick={hide}>Hide</button> : <button onClick={show}>Show</button>}

    </div>
  );
}

export default App;
