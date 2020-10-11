import React,{useState} from 'react'

const UsestateHook = () => {
    const [{x,y} , setVar] = useState({x:1,y:2});
    
    return (
        <div className="name">
            <button onClick={(e) => {
                console.log(e);//We get an event
                setVar( (cur) => {
                    return {
                        ...cur,
                        x: cur.x-1
                    }
                } )
            }}>-</button>
            <p>{x}</p>
            <p>{y}</p>

        </div>
    )
}

export default UsestateHook;