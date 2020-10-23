import React,{useContext} from 'react'
import {MovieContext} from './MovieContext';

const Nav = () => {

    const [state,setState] = useContext(MovieContext)

    return (
        <div className="nav">
            <div className="nitem">MyNav</div>
            <div className="nitem">Number of movies: {state.length} </div>
        </div>
    )
}

export default Nav;