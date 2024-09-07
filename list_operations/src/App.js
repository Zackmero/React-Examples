import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListResult from './ListResult';
import FormView from './FormView';

function App() {


  const [operations, setOperations] = useState([]);

  function sum(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.v1.value);
    const v2 = parseInt(event.target.v2.value);
    const res = v1 + v2;
    const results = {
      property1: v1,
      property2: v2,
      sum: res
    }

    setOperations([results, ...operations]);

    event.target.v1.value = '';
    event.target.v2.value = '';
  }


  return (
    <div>
      <FormView onSum={sum}/>
      <ListResult results={operations} />
    </div>
  );
}

export default App;
