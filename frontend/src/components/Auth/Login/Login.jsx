import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import styled from "styled-components";
import { AuthContext } from "../../../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, setAuth } = useContext(AuthContext);

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
          setAuth(true);
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  min-width: 100%;
  padding: 64px 0px;
`;

const StyledForm = styled.form`
  height: 520px;
  width: 400px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 50px 35px;
  * {
    font-family: "Poppins", sans-serif;
    color: #27292b;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 42px;
    text-align: center;
  }
`;
const StyledLabel = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
`;
const StyledInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  &:hover {
    outline: 2px solid #b3b6ba;
  }
`;
const StyledButton = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
const Social = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  div {
    color: #eaf0fb;
    text-align: center;
  }
`;
export default Login;
