import {useState} from "react";
import {nanoid} from "nanoid";

import FastFoodWindow from "./FastFoodWindow/FastFoodWindow";
import Product from "./Product/Product";
import SelectionBox from "./SelectionBox/SelectionBox";
import ResultPrices from "./ResultPrices/ResultPrices";

import ham from './assets/Hamburger.jpg';
import che from './assets/cheeseburger.jpg';
import pza from './assets/pizza.jpg';
import cof from './assets/coffee.jpg';
import tea from './assets/tea.jpg';
import cola from './assets/cola.jpg';
import './App.css';


const App = () => {
  const [product, setProduct] = useState([
    {name: 'Hamburger', price: 80, image: ham, amount: 0, id: nanoid()},
    {name: 'Cheeseburger', price: 90, image: che, amount: 0, id: nanoid()},
    {name: 'Pizza', price: 250, image: pza, amount: 0, id: nanoid()},
    {name: 'Coffee', price: 100, image: cof, amount: 0, id: nanoid()},
    {name: 'Tea', price: 50, image: tea, amount: 0, id: nanoid()},
    {name: 'Cola', price: 30, image: cola, amount: 0, id: nanoid()},
  ]);

  const [addPro, setAddPro] = useState([]);

  const clickToProduct = id => {
    const addProCopy = [...addPro];
    setProduct(product.map(pro => {
      if (pro.id === id) {
        if (addProCopy.includes(pro.name) === false) addProCopy.push(pro.name);
        return {
          ...pro,
          amount: pro.amount + 1
        };
      }
      return pro;
    }));

    setAddPro(addProCopy);
  };

  const clickToRemButton = name => {
    setAddPro(addPro.filter(elem => elem !== name));
    setProduct(product.map(pro => {
      if (pro.name === name) {
        return {
          ...pro,
          amount: pro.amount = 0,
        };
      }
      return pro;
    }));
  };

  const priceAllProduct = product.reduce((acc, item) => acc + item.price * item.amount, 0);

  const findObjectByName = addPro.map(elem => product.find(p => p.name === elem));

  const addProductInSelectionBox = findObjectByName.map(pro => {
    const findAmount = product.find(elem => elem.id === pro.id);
      return (
          <SelectionBox
              key={nanoid()}
              name={pro.name}
              price={pro.price}
              amount={findAmount.amount}
              cbr={() => clickToRemButton(pro.name)}
          />
      );
  });

  const addProduct = product.map(pro => {
    return (
      <Product
        key={pro.id}
        image={pro.image}
        name={pro.name}
        onClickProduct={() => clickToProduct(pro.id)}
      />
    );
  });

  return (
      <>
        <div className="allBox">
          <div className="one">
            <FastFoodWindow
              key={nanoid()}
              product={addProduct}
            />
          </div>
          <div className="two">
            {
              addPro.length > 0
                  ? addProductInSelectionBox
                  : `Order is empty! Please add some product!`
            }
            <hr/>
            <ResultPrices result={priceAllProduct}/>
          </div>
        </div>
      </>
  );
};

export default App;
