import React, { useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
    Link
} from "react-router-dom";


const Header = () => {
    const [checked, setChecked] = useState(false)
    return (
        <div className='header'>
            <Link to="/" className="nav-route-link"> <span className="navbar-brand" >Deely.</span> </Link>


            <div className="navbar-center">
                <ul className={checked ? "navbar-center_ul active" : "navbar-center_ul"}>

                    <li>
                        <Link to="/" className="nav-route-link"> <span className="nav-link">Home </span> </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-route-link"> <span className="nav-link">Products </span> </Link>
                    </li>
                    <li>
                        <Link to="/detail" className="nav-route-link"> <span className="nav-link">Contact </span> </Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-route-link"> <span className="nav-link">About </span> </Link>
                    </li>
                    <li>
                        <Link to="/register" className="nav-route-link dis_none"> <span className="nav-link">Profile </span> </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="nav-route-link  dis_none"> <span className="nav-link">Cart </span> </Link>
                    </li>

                </ul>

            </div>


            <div className="navbar_profile">

                <Link to="/cart">
                    <IconButton ><LocalMallOutlinedIcon className="header_icon" style={{ fontSize: 30 }} /></IconButton>
                </Link>
                <Link to="/register">
                    <IconButton > <AccountCircleOutlinedIcon className="header_icon" style={{ fontSize: 30 }} />
                    </IconButton>
                </Link>

            </div>
            <div className="checked" >
                <IconButton onClick={() => { setChecked(!checked) }}> {checked ? <CloseOutlinedIcon className="header_icon" style={{ fontSize: 30 }} /> : <MenuOutlinedIcon className="header_icon" style={{ fontSize: 30 }} />} </IconButton >
            </div>

        </div>
    )
}

export default Header