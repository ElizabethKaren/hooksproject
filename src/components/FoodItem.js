import React from 'react'

function FoodItem({ food, index, gotItem, removeItem }){

    const handleKeyPress = (e, index) =>{
      console.dir(e)
      removeItem(index)
    }


    return (
      <div className='food' onKeyDown={(e) => handleKeyPress(e, index)} onClick={() => gotItem(index)}>
        {food.food} &nbsp; {food.got ? '✔️' : ''}
      </div>
    )
  }


  export default FoodItem
  