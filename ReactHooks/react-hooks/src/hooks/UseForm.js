import {useState} from 'react';




export const UseForm = (initialValue) => {
    
    const [value , setValue] = useState(initialValue);

    return [value , (e) => {
        setValue({...value, [e.target.name]:e.target.value})
    }]
}



{/*
//Here we can create our own custom hook
export const UseForm = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    
    return [value, //We return our values and our custom onChange function. Remember - useState is supposed to return two things - values and values updater 
            (e) => {
                setValue({
                    ...value,
                    [e.target.name]:e.target.value //e.target.name returns a name of the input we set
                })
            }
]
}
//Now we can use this hook in any of our components
//We dont have any UI just logic inside. This is where hooks shine

//Important to note: when we defined a return function like that we can just call it in the UseState component like onChange={handleChange}
*/}