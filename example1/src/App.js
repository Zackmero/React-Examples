import logo from './logo.svg';
import './App.css';

function sum(e) {
  e.preventDefault();
  const num1 = parseInt(e.target.val1.value);
  const num2 = parseInt(e.target.val2.value);

  const res = num1 + num2;

  alert('The result of sum is: ' + res);
}

function App() {
  return (
    <div>
      <form onSubmit={sum}>

        <p> <h3>Insert the first value: </h3>
          <input type="number" name="val1" />
        </p>

        <p><h3>Insert the second value:</h3>
          <input type="number" name="val2" />
        </p>

        <p>
          <input type="submit" name="sum" value="Sum"/>
        </p>
      </form>





    </div>
  );
}

export default App;
