import React,{useEffect,useState} from 'react'
import {UseForm} from './UseForm';

const UseEffect = () => {

    const [obj , setObj] = useState({x:10,y:20})

    const [value , setValue] = UseForm({email:'',password:''})
    

    return (
        <div>
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