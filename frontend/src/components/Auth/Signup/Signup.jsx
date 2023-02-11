import React,{useState,useContext} from 'react'
import './Signup.css'
import axios from "axios"
import { AuthContext } from '../../../App'
import { useNavigate } from "react-router-dom"
function Signup() {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const {auth,setAuth}=useContext(AuthContext)
  const navigate=useNavigate()

  const changeUsername=(e)=>{
    setUsername(e.target.value)
  }
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePassword=(e)=>{
    setPassword(e.target.value)
  }
const formSubmit=(e)=>{
  e.preventDefault()

  axios.post('http://localhost:5000/user/signup',{
    username,
    email,
    password
  })
  .then((res)=>{
    if(res.data.success==true){
      localStorage.setItem('access_token',res.data.access_token)
      setAuth(true)
      navigate('/')
    }


  })
  .catch((err)=>{
    console.log(err)
  })

}
  return (
    <div>
       <form onSubmit={formSubmit}>
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" value={username} onChange={changeUsername} />

        <label for="email">Email</label>
        <input type="text" placeholder="Email" id="email" value={email} onChange={changeEmail} />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={changePassword} />

        <button>Signup</button>
        <div className="social">
          <div className="go">Don't have an account? <u>Create Now.</u></div>
        </div>


      </form>
    </div>
  )
}

export default Signup
