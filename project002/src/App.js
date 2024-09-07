import logo from './logo.svg';
import './App.css';

function App() {



  function randomNumber() {
    return Math.trunc(Math.random * 10);
  }

  function showTittle(tittle) {
    return (
      <h1>
        {tittle}
      </h1>
    );
  }

  const year = 2024;
  const personalDetail = {
    name: "Zack",
    birthday: "1998-05-17"
  }

  const search = ["http://google.com", "http://facebook.com", "http://youtube.com"];

  const fin = "fin";

  return (

    <div>
      {showTittle("Hello world in React")}
      {showTittle(fin)}
      <h1>A random number</h1>
      <p>The random number is: {randomNumber()}</p>

      <br />
      <h1>Personal details about you</h1>
      <p>{personalDetail.name} your birthday is {personalDetail.birthday} and the current year is {year}</p>

      <br />
      <h1>Searches most populars of internet</h1>

      <a href={search[0]}>Google</a>
      <br />
      <a href={search[1]}>Facebook</a>
      <br />
      <a href={search[2]}>Youtube</a>

    </div>
  );
}

export default App;
