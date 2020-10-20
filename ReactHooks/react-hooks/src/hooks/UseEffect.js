import React,{useEffect,useState} from 'react'
import { useFetch } from './useFetch';
import {UseForm} from './UseForm';

const UseEffect = () => {

    const [obj , setObj] = useState({x:10,y:20})

    const [value , setValue] = UseForm({email:'',password:''})

    const [count,setCount] = useState(1)
    
    const url = `http://numbersapi.com/${count}`;
    
    let data = useFetch(url)

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
        </div>
    )
}

export default UseEffect;