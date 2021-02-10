import './App.css';
import React, { useState, useEffect } from 'react';
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

  const settingState = array => {
    let newList = array
    if (!localStorage.getItem('food')){
        // if (localStorage.getItem('food')){
        //   newList = JSON.parse(localStorage.getItem('food'))
        // } else {
          localStorage.setItem('food', JSON.stringify(array))
        // }
    } else {
      newList = JSON.parse(localStorage.getItem('food'))
    }
    setFood(newList)
  }

  useEffect(() => settingState(food), [])

  const clearList = () => {
    const newList = []
    setFood(newList)
    localStorage.removeItem('food' )
  }

  const addItem = item => {
    const newFood = [...food, item ]
    setFood(newFood)
    localStorage.setItem('food', JSON.stringify(newFood) )
  }

  const gotItem = index => {
    const newFoods = [...food]
    newFoods[index].got = !newFoods[index].got;
    setFood(newFoods)
    localStorage.setItem('food', JSON.stringify(newFoods) )
  }

  const removeItem = item => {
    const newFoodArray = food.filter(food => food.food !== item )
    setFood(newFoodArray)
    localStorage.setItem('food', JSON.stringify(newFoodArray) )
  }

  if (food === []) return <div className="App"><h2>Grocery List</h2><br/><div className='foodList'><AddFood addItem={addItem} /></div></div>
  return (
    <div className="App">
      <h2>Grocery List</h2>
      <p id='directions'>Click to check off an item and double click to delete an item</p>
      <label className='food' id='x' onClick={clearList}>x</label>
      <div className='foodList'>
        {food.map((thing, index) => <FoodItem removeItem={removeItem} gotItem={gotItem} key={index} food={thing} index={index} /> )}
        <AddFood addItem={addItem} />
      </div>
    </div>
  );
}

export default App;