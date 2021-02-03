import React from 'react'

function FoodItem({ food, index }){
    return (
      <div className='food'>
        {food.food}
      </div>
    )
  }


  export default FoodItem
  