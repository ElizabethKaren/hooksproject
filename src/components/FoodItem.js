import React from 'react'

function FoodItem({ food, index, gotItem, removeItem }){

    return (
      <div className='food' onDoubleClick={() => removeItem(food.food)} onClick={() => gotItem(index)}>
        {food.food} &nbsp; {food.got ? '✔️' : ''}
      </div>
    )
  }


  export default FoodItem
  