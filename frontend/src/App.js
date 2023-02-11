import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Auth/Login/Login'
import Signup from './components/Auth/Signup/Signup'
import GreenServer from './components/DashboardPages/GreenServer'
import Recent from './components/DashboardPages/Recent'
import AllLInks from './components/DashboardPages/AllLinks'
import Use from './components/DashboardPages/Use'
import About from './components/About/About'
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
          <Route path="/" element={<Dashboard ComponentToMount={<AllLInks />} />} />
          <Route path="/about" element={<About />} />
          <Route path="/greenServer" element={<Dashboard ComponentToMount={<GreenServer />} />} />
          <Route path="/recent" element={<Dashboard ComponentToMount={<Recent />} />} />
          <Route path="/use" element={<Dashboard ComponentToMount={<Use />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


      </AuthContext.Provider>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
