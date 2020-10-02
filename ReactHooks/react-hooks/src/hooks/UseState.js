import React, {useState} from 'react';
import { UseForm } from './UseForm';

/*
function timeExpensiveFunction() { 
  //Here goes computation that is time-expensive
}
*/

//Functional (or function-based) component
const UseState = () => {

    //Array Destructuring -> useState returns an array of TWO elements - one is the state itself and the other is a function that updates the state -> [VALUE,UPDATE_VALUE]
    let [count, setCount] = useState(10)  /* () => timeExpensiveFunction(); We call it like so cause now the func is called on only first rendering*/

    let setCnt = () => {//Third way of doing the same thing
        setCount( (curr) => {
            return curr+1;
        })
    }
    //If we had an object like this:
    let [{count1,count2},setCount1] = useState( {count1:10,count2: 11} )

    /*
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    */
   let [value, handleChange] = UseForm({email:'',password:''});
    //What we can do here is to create our own custom hook that will update both email and adress
    
    
    
    return(
        <React.Fragment>
            <div className="first">
                <button onClick={setCnt
                    /*() => setCount( (currCount) => { //  So on click we return an arrow function that returns setCount function. SetCount returns a result of a desired computation
                    return currCount+1; //We can do whatever computation we want here and change the state
                }
                /*count+1))*/}>+</button>
                <div>{count}</div>


                <button onClick={ () => setCount1( (state) => {
                    return {...state,count1:state.count1+1} //If we return it without ...state count2 disappears. Thats cause useState hook doesnt support object merging. We need to use spread operator before the state update
                            /*Like this we override the count1 and count2 doesnt disappear */
                    })}
                    >
                +</button>
                <div className="cnt">
                    <div>Count 1:{count1}</div>
                    <div>Count 2:{count2}</div>
                </div>
            </div>
            {/** Now something even cooler: lets say we have a form */}
            <div className="second">
                <input 
                    type="text"
                    placeholder="email"
                    name='email'
                    value={value.email}
                    onChange={handleChange}
                        /*(e) => {
                        setEmail(e.target.value)
                    }}*/
                />
                <input 
                    type="password" 
                    placeholder="password"
                    name='password'
                    value= {value.password}
                    onChange={handleChange}
                        /*
                        (e) => {
                        setPassword(e.target.value)
                    }}
                    */
                />
            </div>
        </React.Fragment>
    )
}

export default UseState;
/**
 * import React, {useState} from 'react'
 * 
 * cont UseState = () => {
 *      
 *      let [count, setCount] = useState(10)
 * }
 * 
 * 
 * 
 */