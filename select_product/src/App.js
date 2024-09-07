import './App.css';
import { useState } from 'react';

import { categories, products } from './Data.js';

function App() {

  // Initialize Category
  const [category, setCategory] = useState(categories[0]);

  // Initialize Product
  const [product, setProduct] = useState(products[0]);

  // Initialize filtered product
  const [productByCategory, setProductByCategory] = useState(products.filter(product => product.categoryId === category.id));


  // Change category in the select box
  function changeCategory(event) {
    // Set the category selected in the select box
    setCategory(categories.find(category => category.id === Number.parseInt(event.target.value)));

    // Get list product by category
    const productListByCategory = products.filter(product => product.categoryId === Number.parseInt(event.target.value));

    // Set product list result by category 
    setProductByCategory(productListByCategory);

    // Set first product in the list product
    setProduct(productListByCategory[0]);

  }

  // Change product in the select box 
  function changeProduct(event) {
    setProduct(products.find(product => product.id === Number.parseInt(event.target.value)));
  }

  return (

    <div className='formulario'>
      <div>
        <select value={category.id} onChange={changeCategory} >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select value={product.id} onChange={changeProduct}>
          {productByCategory.map(product => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div>
        <ul>
          <li>Category: <string>{category.name}</string></li>
          <li>Product: {product.name}</li>
          <li>Description: {product.info}</li>
          <li>Price: ${product.price} MXN</li>
        </ul>
      </div>
    </div>


  );
}

export default App;
