import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div>
            <form >
                
                <label> Username:
                    <input type='text' placeholder='username'></input>
                </label>

                <label> Password:
                    <input type='password' placeholder='password'></input>
                </label>

                <button onClick={onSubmit}>login</button>
            </form>

            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link> 
        </div>
    )}

export default Login;