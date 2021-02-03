import React from 'react'

function FoodItem({ food, index, gotItem }){

    const updateGot = index => gotItem(index)

    return (
      <div className='food' onClick={() => updateGot(index)}>
        {food.food} &nbsp; {food.got ? '✔️' : ''}
      </div>
    )
  }


  export default FoodItem
  