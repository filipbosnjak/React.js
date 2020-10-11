import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import './Navbar.css'
import {NavData} from './NavData';


const Navbar = () => {

    const [sidebar,setSidebar] = useState(false);

    return (
        <React.Fragment>
            <div className="bg">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={() => setSidebar(!sidebar)}/>
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
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
        </React.Fragment>
    )
}

export default Navbar;