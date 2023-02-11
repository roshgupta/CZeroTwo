import React, { useState, useContext } from "react";
import styled from "styled-components";

import axios from "axios";
import { AuthContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  Social,
} from "../StlyesAuth";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.data.success == true) {
          localStorage.setItem("access_token", res.data.access_token);
          setAuth(true);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <SStyledForm onSubmit={formSubmit}>
        <h3>Signup Here</h3>

        <StyledLabel for="username">Username</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={changeUsername}
        />

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

        <StyledButton>Signup</StyledButton>
        <Social>
          <div className="go">
            Already have an account?<Link to="/login">Login.</Link>
          </div>
        </Social>
      </SStyledForm>
    </Container>
  );
}
const SStyledForm = styled(StyledForm)`
  height: 640px;
  width: 400px;
`;
export default Signup;
