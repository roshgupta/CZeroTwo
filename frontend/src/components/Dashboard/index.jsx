import React,{useState,useEffect} from "react";
import styled from "styled-components";
import IndividualWebsites from "./IndividualWebsites";
import axios from 'axios'
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [datas,setDatas]=useState([])
  const indi = {
    url: "www.orkut.com",
    value: 3434,
    carbon: 232,
  };

  useEffect(()=>{
    axios.get('http://localhost:5000/userlink/top',{
      headers:{
        access_token:localStorage.getItem('access_token')
      }
    })
    .then((res)=>{
      console.log(res)
      setDatas(res.data.arr)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])


  return (
    <Container>
      <SideBar>
        <Tabs>Profile</Tabs>
        <Link to='/recent'>Recent History</Link>
        <Link to='/use'>Domain Emission</Link>
      </SideBar>
      <MainContent>
        <Header>
          <div className="most-visited">
            <IndividualWebsites key={indi.url} data={indi} mostVisited={true} />
          </div>
          <Overall>
            <div className="circle">
              <span className="data">2343</span>
              <span>MB</span>
            </div>
            <p>Overall usages</p>
          </Overall>
        </Header>
        <HeadText>Your carbon footprint history</HeadText>
        <WebsitesData>
          {datas.map((data) => (
            <IndividualWebsites
              key={data.url}
              data={data}
              mostVisited={false}
            />
          ))}
        </WebsitesData>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  min-height: 90vh;
  font-family: "Poppins", sans-serif;
`;
const Overall = styled.div`
  margin-right: 64px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .circle {
    width: 140px;
    height: 140px;
    border: 4px solid #f28702;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .data {
      font-size: 20px;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  padding: 32px 0px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .most-visited {
    width: 70%;
  }
`;
const WebsitesData = styled.div`
  width: 100%;
`;

const MainContent = styled.main`
  width: 100%;
  padding: 32px;
  color: white;
  height: 90vh;
  overflow-y: scroll;
`;
const HeadText = styled.h1``;
const HeadSmallText = styled.h2`
  font-size: 18px;
`;
const SideBar = styled.aside`
  background-color: #0d8b5a;
  width: 100%;
  height: 100%;
  padding: 32px 8px;
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
