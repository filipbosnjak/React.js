import React, { useState } from 'react'

export const useForm = (initialValue) => {
    
    const[value,setValue] = useState(initialValue)
    
    return (
        [value , (e) => {
            setValue({...value,[e.target.name]:e.target.value})
        }]
    )
}
