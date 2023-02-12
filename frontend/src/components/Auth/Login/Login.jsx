import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  Social,
} from "../StylesAuth";
import { AuthContext } from "../../../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

      console.log(auth)

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem('username',res.data.username)
          setAuth(true);
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <StyledForm onSubmit={formSubmit}>
        <h3>Login Here</h3>

        <StyledLabel for="email">Email</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={changeEmail}
        />

        <StyledLabel for="password">Password</StyledLabel>
        <StyledInput
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={changePassword}
        />

        <StyledButton>Log In</StyledButton>
        <Social>
          <div className="go">
            Don't have an account? <Link to="/signup">Create Now.</Link>
          </div>
        </Social>
      </StyledForm>
    </Container>
  );
}

export default Login;
