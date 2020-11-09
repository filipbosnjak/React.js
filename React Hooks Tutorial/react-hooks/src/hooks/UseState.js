import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { UseForm } from "./UseForm";
import UseRef from "./UseRef";

export default function UseState() {
  const [count, setCount] = useState(10);
  const [object, setObject] = useState({ x: 3, y: 4 });

  //const [data , setData] = useState( {email:'' , password:''} )
  const [data, setData] = UseForm({ email: "", password: "" }); //On initial call we set a returning func from useForm as setData

  useEffect(() => {
    //Every time we increment the count this function fires off
    console.log("++");
  }, [count]);

  //<-- useLayoutEffect --> //
  //We use this hook for getting info about DOM elements after all the logic and rendering is done
  //The signature is identical to useEffect, but it fires synchronously after all DOM mutations.

  let input = useRef();

  useLayoutEffect(() => {
    console.log(input.current.getBoundingClientRect()); //We get the positions, width, height etc. of the element
  });

  //This can be usefull when we have a text in a div that is dynamically changing eg. would be our fetched text from numbers api
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount((currentCount) => {
            return ++currentCount; //It increments first and then returns, currentCount++ would return and then increment
          });
        }}
      >
        Increment
      </button>
      <div>
        x: {object.x} y: {object.y}
      </div>
      <button
        onClick={() => {
          setObject((currentObject) => {
            return { ...currentObject, x: --currentObject.x }; //Important to note: useState does no merging of an object like setState in class based components
            //So we need to first destructure entire object and then override the values we want changed
          });
        }}
      >
        Decrement x
      </button>
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

      <input
        ref={input}
        type="email"
        name="email"
        value={data.email}
        placeholder="Email..."
        onChange={setData}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder="Password..."
        onChange={setData}
      />

      <div>Email: {data.email}</div>
      <div>Password: {data.password}</div>
      <UseRef />
    </div>
  );
}
