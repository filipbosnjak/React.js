import React,{useContext, useState} from 'react'


export default function Movie(props) {

    const [theme,setTheme] = useState(true)

    return (
        <React.Fragment>
            <div className={ theme ? 'minfo' : 'minfo gray'}>
                <div>{props.name}</div>
                <div>{props.genre}</div>
            </div>
            <button className="button" onClick={() => {
                setTheme(curr => !curr)
            }}>Toggle Color</button>
        </React.Fragment>
    )
}
