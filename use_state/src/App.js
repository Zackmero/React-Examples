import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //----------------- Random Number with HOOK UseState from React-----------------------------------
  //   function generateRandomNumber() {
  //     const val = Math.trunc(Math.random() * 10);
  //     setValue(val);
  //   }

  //   const [number, setValue] = useState(0);

  //   return (
  //     <div>

  //       <h2>Genered a random number: {number}</h2>
  //       <button onClick={generateRandomNumber}>Genered new value</button>

  //     </div>
  //   );
  //--------------------------------------------------------------------------------------------------


  //----------------- Random Numbers with HOOK UseState from React-----------------------------------

  // function generedNumbers() {
  //   const vector = Array(5);

  //   for (let x = 0; x < vector.length; x++) {
  //     vector[x] = Math.trunc(Math.random() * 10);
  //   }

  //   setValues(vector);
  // }

  // const [numbers, setValues] = useState([0, 0, 0, 0, 0]);

  // return (
  //   <div>
  //     <h1>Random numbers</h1>

  //     {numbers.map(num => (
  //       <p>{num}</p>
  //     ))
  //     }

  //     <button onClick={generedNumbers}>Genered new numbers</button>
  //   </div>
  // );
  //--------------------------------------------------------------------------------------------------

  function deleteLastProduct() {
    if (product.length > 0) {
      const temp = Array.from(product);
      temp.pop();
      setProducts(temp);
    }
  }

  const [product, setProducts] = useState([
    {
      id: 1,
      name: "U\u00f1as",
      price: 200
    },
    {
      id: 2,
      name: "Pesta\u00f1as",
      price: 250
    },
    {
      id: 3,
      name: "Alaciado",
      price: 600
    }
  ]);


  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {product.map(p => {
            return (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
            )
          })}
        </tbody>

      </table>

      <button onClick={deleteLastProduct}>Delete last product</button>
    </div>
  );

}

export default App;
