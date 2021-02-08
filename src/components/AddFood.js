import React, { useState } from 'react';

function AddFood ({ addItem }){
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault()
        if (!value) return
        addItem({ food: value, got: false })
        setValue('')
    }
    
    return ( 
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={e => setValue(e.target.value) }/>
        </form>
    </div>
    )
}

export default AddFood