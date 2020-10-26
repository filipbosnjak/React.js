import React, { useState,useEffect, useRef } from 'react'

export default function UseFetch(url) {
    
    const [data, setData] = useState('')
    

    useEffect( () => {
        fetch(url)
            .then(data => data.text())
            .then(data => setData(data))
    } , [url])
    
    return data;
}
