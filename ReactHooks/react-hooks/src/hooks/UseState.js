import React, {useState} from 'react';

/*
function timeExpensiveFunction() { 
  //Here goes computation that is time-expensive
}
*/

const UseState = () => {

//Array Destructuring -> useState returns an array of two elements - one is the state itself and the other is a function that updates the state -> [VALUE,UPDATE_VALUE]
let [count, setCount] = useState(10)  /* () => timeExpensiveFunction(); We call it like so cause now the func is called on only first rendering*/

//If we had an object like this:
let [{count1,count2},setCount1] = useState( {count1:10,count2: 11} )
    return(
    <React.Fragment>
        <button onClick={() => setCount( (currCount) => { //  So on click we return an arrow function that returns setCount function. SetCount returns a result of a desired computation
            return currCount+1; //We can do whatever computation we want here and change the state
        }
        /*count+1*/)}>+</button>
        <div>{count}</div>

        <button onClick={ () => 
            setCount1( state => {
            return {count1:state.count1+1} //If we return it like this 
            })}
            >
        +</button>
        <div>Count 1:{count1}</div>
        <div>Count 2:{count2}</div>
    </React.Fragment>
    )
}

export default UseState;