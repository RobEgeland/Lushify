import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const { loggedIn } = useContext(UserContext)

    if(loggedIn) {
        // add the the other routes here
    } else {
        return (
            <div className='navbar-parent'>
                <div className='navbar'>
                    <a><NavLink to={"/signup"}>Signup</NavLink></a>
                    <a><NavLink to={"/login"}>LogIn</NavLink></a>
                </div>
            </div>
        )

    }
}

export default Navbar