import React, { useEffect } from 'react'

export default function Hello() {
    
    useEffect(()=>{
        const func = () => {
            console.log('rendering...')
        }
        func();
        return () => {
            console.log("unmounting...");//Here we put all of our clean up logic
        }
    })

    return (
        <div>
            hello
        </div>
    )
}
