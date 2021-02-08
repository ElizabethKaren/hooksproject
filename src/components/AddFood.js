import React, { useState } from 'react';

function AddFood ({ addItem }){
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault()
        if (!value) return
        addItem({ food: value, got: false })
        setValue('')
    }

    const handleOnChange = e => {
        console.log(e.target)
        setValue(e.target.value)
    }
    
    return ( 
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={(e) => handleOnChange(e) }/>
        </form>
    </div>
    )
}

export default AddFood