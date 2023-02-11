import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo>
          <Link to="/">
            <img src="/images/logoFooter.png" alt="" />
          </Link>
        </Logo>
        <Links>
          <Link to="">Home</Link>
          <Link to="">Dashboard</Link>
          <Link to="">About</Link>
        </Links>
        <Resources>
          <Link to="">View on Github</Link>
        </Resources>
      </Container>

      <CopyrightSection>
        <p>© 2023 CZeroTwo</p>
      </CopyrightSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  width: 100%;
  background-color: #2e2e2e;
  color: white;
  padding-top: 16px;
`;
const Container = styled.div`
  display: flex;
  padding: 0px 16px;
`;
const Resources = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 64px;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    margin: 6px 0px;
    text-align: right;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Logo = styled.div`
  a {
    img {
      width: 160px;
      height: 160px;
    }
  }
`;
const Links = styled.div`
  padding-left: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
    margin: 6px 0px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const CopyrightSection = styled.div`
  width: 100%;
  height: 48px;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Footer;
