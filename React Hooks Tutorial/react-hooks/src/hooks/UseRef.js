import React, { useRef, useState } from 'react'

export default function UseRef() { //We use useRef hook for storing a referenc to a component
    
    const [name , setName] = useState('');

    const input = useRef(); //Returns an object
    //console.log(input.current)
    

    //With useRef we can also update the values of our variables and those updates wont cause a rerender -> demonstrated in a UseEffect component

    return (
        <div>
            <input ref={input}type="text" name="name" value={name} onChange={ (e) => {
                setName(e.target.value)
            }}/>
            <p>{name}</p>
            <button onClick={() => {
                input.current.value = ''; //We can reference the input field from whereever we want
                setName('')
            }} >Clear</button>
        </div>
    )
}
