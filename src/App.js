import './App.css';
import React, { useState, useEffect } from 'react';
import FoodItem from './components/FoodItem'
import AddFood from './components/AddFood'

const App = () => {

  const [food, setFood] = useState([
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

  const settingState = () => {
    if (!localStorage.getItem('food')){
      localStorage.setItem('food', JSON.stringify(food))
    } else {
      setFood(JSON.parse(localStorage.getItem('food')))
    }
  }

  useEffect(settingState, [])

  const clearList = () => {
    setFood([])
    localStorage.removeItem('food')
  }

  const set = item => {
    setFood(item)
    localStorage.setItem('food', JSON.stringify(item))
  }

  const addItem = item => set([...food, item])

  const gotItem = index => {
    const newFoods = [...food]
    newFoods[index].got = !newFoods[index].got;
    set(newFoods)
  }

  const removeItem = item => set(food.filter(food => food.food !== item))

  if (food === []) return <div className="App"><h2>Grocery List</h2><br/><div className='foodList'><AddFood addItem={addItem} /></div></div>

  return (
    <div className="App">
      <h2>Grocery List</h2>
      <p id='directions'>Click to check off an item and double click to delete an item</p>
      <label className='food' id='x' onClick={clearList}>X</label>
      <div className='foodList'>
        {food.map((thing, index) => <FoodItem removeItem={removeItem} gotItem={gotItem} key={index} food={thing} index={index} /> )}
        <AddFood addItem={addItem} />
      </div>
    </div>
  );
}

export default App;