import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/Signup/Signup'
import { useState } from 'react'
import React from 'react'
export const AuthContext= React.createContext(null)

function App() {

  const [auth,setAuth]=useState(false)


  return (
    <BrowserRouter>
    <AuthContext.Provider value={{auth,setAuth}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
