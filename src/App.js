import './App.css';
import React, { useState } from 'react';
import FoodItem from './components/FoodItem'

function App() {

  const [food, setFood ] = useState([
    {
      food: 'Bananas',
      got: false
    },
    {
      food: 'Soy Milk',
      got: false
    },
    {
      food: 'Sweet Potato',
      got: false
    }
  ]);

  console.log(food)

  return (
    <div className="App">
      <br/>
      <div className='foodList'>
        {food.map((thing, index) => <FoodItem key={index} food={thing} index={index} /> )}
      </div>
    </div>
  );
}

export default App;
