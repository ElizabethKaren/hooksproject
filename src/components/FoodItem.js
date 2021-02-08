import React from 'react'

function FoodItem({ food, index, gotItem, removeItem }){

    const updateGot = (e, index) => {
      if(e.which==1){ 
        removeItem(index)
     } else {
       gotItem(index)
     }
    }


    return (
      <div className='food' onClick={(e) => updateGot(e, index)}>
        {food.food} &nbsp; {food.got ? '✔️' : ''}
      </div>
    )
  }


  export default FoodItem
  