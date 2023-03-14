import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Navbar = () => {
    const { loggedIn } = useContext(UserContext)

    if(loggedIn) {
        // add the the other routes here
    } else {
        return (
            <div className='navbar'>
                <ul>
                    <li>LogIn</li>
                    <li>Signup</li>
                </ul>
            </div>
        )

    }
}

export default Navbar