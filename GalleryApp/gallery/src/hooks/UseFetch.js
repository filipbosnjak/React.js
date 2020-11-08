import { useState,useEffect } from 'react'

const UseFetch = (url) => {
    
    const [data, setData] = useState(null)
    
    const [loading , setLoading] = useState(true);
    
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    } , [url])
    return(loading ? -1 : data );
    
}

export default UseFetch;