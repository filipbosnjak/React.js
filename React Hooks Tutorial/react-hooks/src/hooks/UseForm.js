import React, { useState } from 'react'

export  const UseForm = (initialObject) => { //Like this we can create our custom hook that looks like useState hook 
                                             //This hook handles input onChange and sets the object values
    
    const [object , setObject] = useState(initialObject)
    
    return (
        [object , (e) => {
            setObject( (currentObject) => {
                return {...currentObject, [e.target.name]:e.target.value} //With [e.target.name] we destructure the name of our html element
            } )
        } ]
    )
}
