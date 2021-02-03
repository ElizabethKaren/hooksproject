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

  useEffect(() => {
    // function handleStatusChange () {
    //   if (localStorage.getItem('food') && localStorage.getItem('food') != []){
    //     const newfood = JSON.parse(localStorage.getItem('food'))
    //     setFood(newfood)
    //   } else {
    //     localStorage.setItem('food', JSON.stringify(food) )
    //   }
    // }
  });

  const clearList = () => {
    const newList = []
    setFood(newList)
    localStorage.setItem('food', JSON.stringify(newList) )
  }

  const addItem = item => {
    const newFood = [...food, item ]
    setFood(newFood)
    localStorage.setItem('food', JSON.stringify(newFood) )

  }

  const gotItem = index => {
    const newFoods = [...food]
    newFoods[index].got = true;
    setFood(newFoods)
    localStorage.setItem('food', JSON.stringify(newFoods) )
  }

  if (food === []) return <div className="App"><h2>Grocery List</h2><br/><div className='foodList'><AddFood addItem={addItem} /></div></div>
  return (
    <div className="App">
      <h2>Grocery List</h2>
      <label className='food' id='x' onClick={clearList}>x</label>
      <div className='foodList'>
        {food.map((thing, index) => <FoodItem gotItem={gotItem} key={index} food={thing} index={index} /> )}
        <AddFood addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
