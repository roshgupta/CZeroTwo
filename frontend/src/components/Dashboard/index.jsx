import React, { useContext } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ ComponentToMount }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  if (auth == false) {
    navigate("/login");
  }

  let username = null;
  username = localStorage.getItem("username");

  return (
    <Container>
      <SideBar>
        <HelloTitle>{username && <h2>Hey {username}</h2>}</HelloTitle>
        <Link to="/">
          <Tabs>All Websites</Tabs>
        </Link>
        <Link to="/recent">
          <Tabs>Recent History</Tabs>
        </Link>
        <Link to="/use">
          <Tabs>Domain Emission</Tabs>
        </Link>
        <Link to="/greenServer">
          {" "}
          <Tabs> Green Servers</Tabs>
        </Link>
      </SideBar>
      {ComponentToMount}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 90vh;
  font-family: "Poppins", sans-serif;
`;

const HelloTitle = styled.h2`
  color: #fff;
`;
const SideBar = styled.aside`
  background-color: #0d8b5a;
  width: 100%;
  height: 100%;
  padding: 32px 8px;
  a {
    text-decoration: none;
  }
`;
const Tabs = styled.div`
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  background-color: #b9f8d5;
  color: green;
  border-radius: 4px;
  margin: 12px 0px;
  cursor: pointer;
`;
export default Dashboard;
