import React from 'react'
import {NavLink} from 'react-router-dom'


const Nav = () => {
    return (
        <div className="nav">
            <div className="link">
                <NavLink exact to="/">Discussion</NavLink>
            </div>
            <div className="link">
                <NavLink exact to="/rules">Rules</NavLink>
            </div>
            <div className="link">
                <NavLink exact to="/workflow">Workflow</NavLink>
            </div>
        </div>
    )
}
export default Nav