import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <form>
        <h3>Login Here</h3>

        <label for="username">Email</label>
        <input type="text" placeholder="Email" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go">Don't have an account? <u>Create Now.</u></div>
        </div>
      </form>
    </div>
  )
}

export default Login
