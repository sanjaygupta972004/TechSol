
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'  
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Logout from './pages/Logout'
import  Error  from './components/Error'
import Navbar from './components/Navbar'

import AdminLayout from './components/Admin/Admin-layout'
import AdminUser from './components/Admin/Admin-user'
import AdminService from './components/Admin/Admin-service'
import AdminContact from './components/Admin/Admin-contact'


function App() {

  return (
    <>
    <Router>
     <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="*" element={<Error />} />
      <Route path='/admin' exact element = {<AdminLayout/>}>
        <Route path='user' element={<AdminUser/>} />
        <Route path='service' element={<AdminService/>} />
        <Route path='contact' element={<AdminContact/>} />

      </Route>
     

    </Routes>
  </Router>

    </>
  )
}

export default App
