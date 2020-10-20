import React,{useEffect,useState} from 'react'
import  Hello from './Hello';
import { useFetch } from './useFetch';
import {UseForm} from './UseForm';

const UseEffect = () => {

    const [obj , setObj] = useState({x:10,y:20})

    const [value , setValue] = UseForm({email:'',password:''})

    const [count,setCount] = useState(() => { //Like this JSON.parse is called only once on the first render
        return JSON.parse(localStorage.getItem('count'))
    })
    

    const [showHello , setShowHello] = useState(true);
    
    const url = `http://numbersapi.com/${count}`;
    
    let data = useFetch(url)

    useEffect(() => {
        console.log('useEffect called')
        return () => {
            
        }
    }, [value.email]) //empty array - called only once, when we put values inside then it listens to changes of that values and on each change callback function is being called

    useEffect(() => {
        localStorage.setItem("count" , JSON.stringify(count))   
    }, [count]); //Like this we can simply persist to the localStorage in the browser. We listen to the count change and we update the localStorage every time the count is updated

    return (
        <div>
            <div>{data.data}</div>
            <button onClick={() => {
                setCount((currCount) => currCount+1)
            }}>increment
            </button>
            <div>{obj.x} {obj.y}</div>
            <button onClick={() => setObj((currentObj) => {
                return {...currentObj, x:currentObj.x+2}
            })}>+</button>
            <input type="text" name="email" placeholder="email" value={value.email} onChange={setValue}/>
            <input type="password" name="password" placeholder="password" value={value.password} onChange={setValue}/>
        <div>{value.email} {value.password}</div>
        <button onClick={() => setShowHello((currBool) => !currBool)}>show</button>
        {showHello && <Hello/>} {/*In this expression Hello component gives always 1 or true and we can conditionaly render it by toggling boolean variable showHello */}
        </div>
    )
}

export default UseEffect;