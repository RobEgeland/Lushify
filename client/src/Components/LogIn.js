import React, {useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const LogIn = () => {
    const {loggedIn, setLoggedIn, setCurrentUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState()

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(user)
        }
        fetch('/login', options)
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setCurrentUser(data)
                    setLoggedIn(true)
                    navigate("/")
                })
            }else {
                res.json().then(error => {
                    setErrors(error.errors)
                })
            }
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Log In</h1>
            {loggedIn ? null : <div className='error'>{errors}</div>}
            <div className='input-container'>
                <div className='email'>
                    <label className='placeholder' htmlFor='email'>Email</label>
                    <br/>
                    <input className='input' id="email" name='email' type={"text"} value={user.email} onChange={handleChange}  />
                </div>
                <div>
                <label className='placeholder' htmlFor='password'>Password</label>
                    <br/>
                    <input className='input' id="password" name='password' type={"text"} value={user.password} onChange={handleChange}  />
                </div>
                <input className='submit' type={"submit"} value={"Log In"}/>
            </div>
        </form>
    </div>
  )
}

export default LogIn