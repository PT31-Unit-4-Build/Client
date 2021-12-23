import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'

function Register (props) {

    const {formChange, values} = props;

    const onChange = (event) => {
        const {name, value} = event.target
        formChange(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <div>

            <form onSubmit={onSubmit}>

                <label> Username:
                    <input placeholder='username'
                        className='register-input' type='text'
                        name='username' 
                        value={values.username}
                        onChange={onChange}>
                    </input>
                </label>

                <label> Phone Number:
                    <input placeholder='(xxx)xxx-xxxx'
                        type='tel'
                        name='phone'
                        value={values.phone}
                        onChange={onChange} >
                    </input>
                </label>

                <label> Password:
                    <input 
                        placeholder='password'
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}>
                    </input>
                </label>

                <button>Submit</button>
            </form>

            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    )}

export default Register