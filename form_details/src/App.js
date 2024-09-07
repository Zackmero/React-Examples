import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [details, setDetails] = useState(
    {
      name: '',
      age: '',
      studies: false
    }
  );



  function changeName(e) {
    setDetails((val) => (
      {
        ...val,
        name: e.target.value
      }
    ));
  }

  function changeAge(e) {
    setDetails((val) => (
      {
        ...val,
        age: e.target.value
      }
    ));
  }

  function changeStudies(e) {
    setDetails((val) => (
      {
        ...val,
        studies: !details.studies
      }
    ));
  }

  function showDetails(e) {
    e.preventDefault();
    alert(details.name + ' your age is ' + details.age + ' and your are' + (details.studies ? ' with studies' : ' without studies'));
  }

  return (
    <div >

      <form onSubmit={showDetails}>

        <p>
          Set your name:
          <input type="text" name="inName" value={details.name} onChange={changeName} />
        </p>
        <p>
          Set your age:
          <input type="number" name="inAge" value={details.age} onChange={changeAge} />
        </p>
        <p>
          Studies:
          <input type="checkbox" name="checkStudies" value={details.studies} onChange={changeStudies} />
        </p>

        <button type="submit" name="btnSend" >Send</button>
      </form>

      <hr />

      <h3>Legal Name: {details.name}</h3>
      <h3>Age: {details.age}</h3>
      <h3>Studies: {details.studies ? 'With studies' : 'Without studies'}</h3>

    </div>
  );
}

export default App;
