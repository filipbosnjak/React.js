import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import './Navbar.css'
import {NavData} from './NavData';
import {IconContext} from 'react-icons';


const Navbar = () => {

    const [sidebar,setSidebar] = useState(false);

    const style = {
        color:'#fff'
    }

    return (
        <React.Fragment>
            <IconContext.Provider value={style}>
            <div className="bg">
            <div className="navbar">
                <IconContext.Provider value={{color:'rgb(83, 79, 79)'}}>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={() => setSidebar(!sidebar)}/>
                    </Link>
                </IconContext.Provider>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" onClick={() => setSidebar(!sidebar)}>
                        <Link to="#" className='close'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {NavData.map( (dataObj , i) => {
                        return(
                            <li key={i} className={dataObj.className}>
                                <Link to={dataObj.path}>
                                    {dataObj.icon}
                                    <span>{dataObj.lable}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </div>
            </IconContext.Provider>
        </React.Fragment>
    )
}

export default Navbar;