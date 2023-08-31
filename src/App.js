import './App.css';
import React from 'react'
import SignUp from './components/SignUp';
import Login from './components/Login';
// import { Route , Switch , Redirect } from 'react-router-dom';

import { Route , Routes , Navigate } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      {/* <Switch>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Redirect from='/' to='/signup'/>
      </Switch> */}

      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<SignUp />}/>
      </Routes>
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  )
}


export default App;
