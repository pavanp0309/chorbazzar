import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import LoginIn from './pages/LoginIn'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import ResetPassword from './pages/ResetPassword'



const App = () => {
  const location=useLocation()
  console.log(location.pathname)

  let navPath=["/loginin","/register","/reset"]

  let hideNavbar=navPath.includes(location.pathname)
  console.log(hideNavbar)

  return (
    < >
      
      
        {!hideNavbar&&<Navbar/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
  
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/loginin' element={<LoginIn />} />
          <Route path='/reset' element={<ResetPassword />} />
        </Routes>
     

    </>
  )
}

export default App
