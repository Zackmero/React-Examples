import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //const [number, setNumber] = useState('');


  //   function changeNumber(event) {
  //     const text = event.target.value;

  //     console.log(text.length);
  //     console.log(text);


  //     let count = 0;

  //     for (let i = 0; i <= text.length; i++) {

  //       if (text[i] == '0' || text[i] == '1') {
  //         count++;
  //       }
  //       if (count == text.length) {
  //         setNumber(text);
  //       }

  //     }
  //   }

  //   return (
  //     <div >
  //       <p>
  //         Set your binary number:
  //         <input type="text" value={number} onChange={changeNumber} />
  //       </p>
  //     </div>
  //   );


  const [number, setNumber] = useState('');

  function changeText(event) {

    setNumber(event.target.value);
  }

  return (
    <div>
      <p>
        <textarea value={number} onChange={changeText} cols="100" rows="5" />
      </p>
      <hr />
      <p>
        Amount of characteres inserted: {number.length}

      </p>

    </div>
  )


}

export default App;
