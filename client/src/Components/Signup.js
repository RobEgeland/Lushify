import React, {useState} from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Signup = () => {
    const {setLoggedIn, setCurrentUser} = useContext(UserContext)
    const [errors, setErrors] = useState()
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    function handleSignUpChange(e) {
        setNewUser({
            ...newUser,
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
            body: JSON.stringify(newUser)
        }

        fetch('/users', options)
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    setCurrentUser(data)
                    setLoggedIn(true)
                })
            }else {
                res.json().then(error => {
                    console.log(error.errors)
                    const errorAr = []
                    for (const element in error.errors) {
                        errorAr.push(` ${element} ${error.errors[element]} -`)
                    }
                    setErrors(errorAr)
                    throw new Error(errors)
                })
            }
        })
    }
  return (
    <div className='signup-div'>
        <form className='submit-form' onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label>Business Name</label>
            <br/>
            <input className='input' name="name" value={newUser.name} onChange={handleSignUpChange}></input>
            <br/>
            <label>Email</label>
            <br/>
            <input className='input' name="email" value={newUser.email} onChange={handleSignUpChange}></input>
            <br/>
            <label>Password</label>
            <br/>
            <input className='input' type={"password"} name="password" value={newUser.password} onChange={handleSignUpChange}></input>
            <br/>
            <label>Confirm Password</label>
            <br/>
            <input className='input' type={"password"} name="password_confirmation" value={newUser.password_confirmation} onChange={handleSignUpChange}></input>
            <br/>
            <input className='submit' type={"submit"} value={"Sign Up"}/>
        </form>
    </div>
  )
}

export default Signup