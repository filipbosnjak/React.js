import React, {useEffect, useState,useRef, useLayoutEffect} from 'react'
import UseFetch from './UseFetch'

export default function UseEffect() {
    
    useEffect(() => { //Any time a component is rerendered this function is getting called
        
        console.log('mounted')
        
        return () => {
            //Cleanup logic
            console.log('unmounted') //Gets called after the component is unmounted i.e. disappears from the DOM
        }
        
    }, [/*Watched/listened to variables */])

    
    
    //Fetching form the api
    
    const [num , setNum] = useState(JSON.parse(localStorage.getItem('num')))

    let url = `http://numbersapi.com/${num}/trivia`

    // const [text , setText] = useState('')

    // useEffect( () => {
    //     fetch(url)
    //         .then(x => x.text())
    //         .then(text => setText(text))
    // } , [url])
    
    let text = UseFetch(url)

    //Persisting to local storage

    useEffect( () => {
        localStorage.setItem('num' , JSON.stringify(num))
        console.log(num)
    } , [num])
    

    let rendered = useRef(0)
    console.log('rendered: ' ,rendered.current++)

    let textDiv = useRef()
    const [divData , setDivData] = useState()

    useLayoutEffect(() => {
        setDivData(textDiv.current.getBoundingClientRect())
    } , [text])

    return (
        <div >
            <button onClick={ () => {
                setNum( (currentNum) => {
                   return  currentNum - 1;
                })
            }}>Number before</button><br/>
            <div style={{display:"flex"}}>
                <div ref={textDiv}>{text}</div>
            </div>
            <button onClick={ () => {
                setNum( (currentNum) => {
                    return currentNum + 1;
                })
            }}>Number after</button>
            <pre>{JSON.stringify(divData,null , 2)}</pre>
        </div>
    )
}
