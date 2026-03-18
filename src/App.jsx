
import './App.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Login from "./components/login"
import Signup from "./components/signup"
import Logout from './components/logout'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
