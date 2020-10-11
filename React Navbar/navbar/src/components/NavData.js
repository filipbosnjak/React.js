import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const NavData = [
    {
        lable:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        className:'nav-text'
    },
    {
        lable:'Reports',
        path:'/reports',
        icon: <IoIcons.IoIosPaper/>,
        className:'nav-text'
    },
    {
        lable:'Products',
        path:'/products',
        icon: <FaIcons.FaCartPlus/>,
        className:'nav-text'
    },
    {
        lable:'Team',
        path:'/team',
        icon: <IoIcons.IoMdPeople/>,
        className:'nav-text'
    },
    {
        lable:'Messages',
        path:'/messages',
        icon: <AiIcons.AiOutlineMessage/>,
        className:'nav-text'
    },
    {
        lable:'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircleOutline/>,
        className:'nav-text'
    },
]