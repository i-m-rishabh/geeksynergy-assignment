
import { useState } from 'react'
import './App.css'
// import Home from './pages/Home.jsx/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import MainContainer from './components/MainContainer'

function App() {
  const [auth, setAuth] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  function onSuccess(status){
    setAuth(status);
  }
  function onSignedUp(status){
    setSignedUp(status);
  }
  return (
    <div className='app-container'>
      {!signedUp && <Signup onSignedUp={onSignedUp}/>}
      {signedUp && !auth && <Login onSuccess={onSuccess}/>}
      {auth && <MainContainer/>}
    </div> 
  )
}

export default App
