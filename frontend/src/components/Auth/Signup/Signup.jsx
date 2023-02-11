import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div>
       <form>
        <h3>Signup Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" />

        <label for="email">Email</label>
        <input type="text" placeholder="Email" id="email" />

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

export default Signup
