
import React,{useState,useContext} from 'react'
import axios from 'axios'
import './Login.css'
import { AuthContext } from '../../../App'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const {auth,setAuth}=useContext(AuthContext)

  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePassword=(e)=>{
    setPassword(e.target.value)
  }
const formSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:5000/user/login',{
    email,
    password
  })
  .then((res)=>{
    if(res.data.success==true){
      localStorage.setItem('access_token',res.data.access_token)
      setAuth(true)
    }

  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div>
      {!auth&& <h1>HEl</h1> }
      <form onSubmit={formSubmit}>
        <h3>Login Here</h3>

        <label for="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={changePassword}
        />

        <button>Log In</button>
        <div className="social">
          <div className="go">
            Don't have an account? <u>Create Now.</u>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
