import React,{useState} from 'react'
import './Login.css'

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const changePassword=(e)=>{
    setPassword(e.target.value)
  }
const formSubmit=(e)=>{
  e.preventDefault()
  console.log(email,password)
}
  return (
    <div>
      <form onSubmit={formSubmit}>
        <h3>Login Here</h3>

        <label for="email">Email</label>
        <input type="text" placeholder="Email" id="email" value={email} onChange={changeEmail} />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={changePassword} />

        <button>Log In</button>
        <div className="social">
          <div className="go">Don't have an account? <u>Create Now.</u></div>
        </div>
      </form>
    </div>
  )
}

export default Login
