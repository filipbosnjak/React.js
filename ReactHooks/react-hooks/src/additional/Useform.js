import {useState}from 'react'

export const Useform = (currValue) => {
    
    const [value,setValue] = useState(currValue);
    
    return [value, (e) => setValue({...value,[e.target.name]:e.target.value})] //We defined the setValue here so we can put onChange={setValue}
    
}

