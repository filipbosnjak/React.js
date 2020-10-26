import React ,{useState} from 'react'
import {UseForm} from './UseForm'

export default function UseState() {
    
    const [count , setCount] = useState(10)
    const [object , setObject] = useState ({x:3,y:4})

    //const [data , setData] = useState( {email:'' , password:''} )
    const [data , setData] = UseForm( {email:'' , password:''} )
     
    return (
        <div>
           <div>{count}</div> 
           <button onClick={() => {
               setCount( (currentCount) => {
                   return ++currentCount //It increments first and then returns, currentCount++ would return and then increment
                })
           }}>Increment</button>
           <div>x: {object.x} y: {object.y}</div>
           <button onClick={() => {
               setObject( (currentObject) => {
                   return {...currentObject , x:currentObject.x+1} //Important to note: useState does no merging of an object like setState in class based components
                                                                   //So we need to first destructure entire object and then override the values we want changed
               })
           }}>Increment</button>
           {/* <input type="text" name="email" value={data.email} placeholder="Email..." onChange={ (e) => { //onCange - like mounting event listener with addEventLIstener('change' ,() => {...})
                setData((currentData) => {
                    return {...currentData , email:e.target.value}
                })
            }}/>
           <input type="password" name="pass" value={data.password} placeholder="Password..." onChange={ (e) => {
               setData( (currentData) => {
                   return {...currentData, password:e.target.value}
               })
           }}/> */}

           <input type="email" name="email" value={data.email} placeholder="Email..." onChange={setData}/>
           <input type="password" name="password" value={data.password} placeholder="Password..." onChange={setData}/>

        <div>Email: {data.email}</div>
         <div>Password: {data.password}</div> 
        </div>
    )
}
