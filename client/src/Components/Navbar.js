import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { NavLink } from 'react-router-dom'

const Navbar = ({handlePopupChange}) => {
    const { loggedIn } = useContext(UserContext)

    if(loggedIn) {
        return (
            <div className='navbar-parent'>
                <div className='navbar'>
                    <span className='logo'>Lushify</span>
                    <div className='nav-items-main'>
                    <a><NavLink to={"/take-order"}>Take Order</NavLink></a>
                    </div>
                    <a><NavLink onClick={handlePopupChange} to={"/take-order"}>Log Out</NavLink></a>
                </div>
            </div>
        )
    } else {
        return (
            <div className='navbar-parent'>
                <div className='navbar'>
                    <span className='logo'>Lushify</span>
                    <a><NavLink to={"/signup"}>Signup</NavLink></a>
                    <a><NavLink to={"/login"}>LogIn</NavLink></a>
                </div>
            </div>
        )

    }
}

export default Navbar