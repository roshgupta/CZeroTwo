import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/Signup/Signup'
import GreenServer from './components/GreenServers/GreenServer'
import Recent from './components/Recent/Recent'
import Use from './components/Use/Use'
import { useState } from 'react'
import React from 'react'
export const AuthContext = React.createContext(null)

function App() {

  const [auth, setAuth] = useState(false)


  return (
    <BrowserRouter>

      <AuthContext.Provider value={{ auth, setAuth }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/greenServer" element={<GreenServer />} />
          <Route path="/recent" element={<Recent />} />
          <Route path="/use" element={<Use />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


      </AuthContext.Provider>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
