import './App.css';
import React, { useState } from 'react';
import FoodItem from './components/FoodItem'
import AddFood from './components/AddFood'

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

  const addItem = item => {
    const newFood = [...food, item ]
    setFood(newFood)
  }

  const gotItem = index => {
    const newFoods = [...food]
    newFoods[index].got = true;
    setFood(newFoods)
  }

  return (
    <div className="App">
      <br/>
      <div className='foodList'>
        {food.map((thing, index) => <FoodItem gotItem={gotItem} key={index} food={thing} index={index} /> )}
        <AddFood addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
