import "./App.css";
import React, { useState } from "react";
import { Route, Link, Routes} from "react-router-dom";
import Home from "./components/Home";
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/Dashboard'


const intialFormValues = {
  username: '',
  password: '',
  phone: '',
}

export default function App() {

  const [ formValues, setFormValues ] = useState(intialFormValues)

  const formChange = (name,value) => {
    setFormValues({...formValues, [name]: value})
  }

  return (
    <div className='App'>
      <div>
        <h1>Water My Plants </h1>
        <h3>Never forget to feed your plants again!</h3>
      
        <Link to='/'></Link>

        <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/dashboard'>
          <DashBoard />
        </Route>

        <Route exact path='/register'>
          <Register
            formChange={formChange}
            values={formValues} />
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>
      </Routes>

      </div>
    </div>
  );
}