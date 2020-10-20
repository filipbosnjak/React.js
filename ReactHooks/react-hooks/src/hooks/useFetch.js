import { useState,useEffect } from "react"

export const useFetch = (url) => {

    const [state,setState] = useState({data:null, loading:true})

    useEffect(() => {
        setState({data:state.data,loading:true})
        fetch(url)
        .then(x => x.text())
        .then(y => setState({data:y , loading:false}) )
        
    }, [url])
    return state;
}