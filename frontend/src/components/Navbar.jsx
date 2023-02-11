import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <Links>
        <Logo>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
            <p>CZeroTwo</p>
          </Link>
        </Logo>
        <Link className="nav-links" to="">
          Home
        </Link>
        <Link className="nav-links" to="">
          Dashboard
        </Link>
        <Link className="nav-links" to="">
          About
        </Link>
        <Link className="nav-links" to="">
          Contact
        </Link>
      </Links>
      <LoginSignup>
        <Link to="">Login</Link>
        <Link to="">Signup</Link>
      </LoginSignup>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  font-size: 16px;
  .logo {
    img {
      width: 80px;
      height: 80px;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
  a {
    display: flex;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 600;
      margin-left: 8px;
    }
  }
`;
const Links = styled.div`
  padding-left: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  .nav-links:hover {
    text-decoration: underline;
    transition: all 0.3s ease-in-out;
  }
`;

const LoginSignup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  a {
    background-color: #5fc19b;
    padding: 10px 20px;
    margin: 0px 8px;
    border-radius: 8px;
  }
  a:hover {
    background-color: #44b98c;
  }
`;

export default Navbar;
