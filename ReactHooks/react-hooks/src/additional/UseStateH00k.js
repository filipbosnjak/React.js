import React, {useState} from 'react'
import {Useform} from './Useform';


const UseStateH00k = () => {

    const [obj , setObj] = useState({x:3,y:4,z:26});
    const [user , setUser] = useState('');

    const [value , setValue] = Useform({email:'',password:''});

    return (
        <div>
            <div>{obj.x}</div>
            <div>{obj.y}</div>
            <div>{obj.z}</div>
            <button onClick={() => setObj((currObj) =>{
                return {...currObj,x:currObj.x+1,y:currObj.y+1}
            })}></button>
            <input name="user" placeholder="UserName" value={user} onChange={setValue}/>
            <input name="email" placeholder="email" value={value.email} onChange={setValue}/>
            <div>{user}</div>
            <div>{value.email}</div>
        </div>
    )
}

export default UseStateH00k;