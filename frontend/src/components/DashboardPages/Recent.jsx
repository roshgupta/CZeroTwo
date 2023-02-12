import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {MainContent,WebsitesData} from "./AllLinks"
import IndividualWebsites from "../Dashboard/IndividualWebsites"
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
function Recent() {

    const [datas,setDatas]=useState([])

    const navigate = useNavigate();
  const {auth}= useContext(AuthContext)
  if(auth==false){
    navigate('/login')
  }

    useEffect(()=>{

        axios.get('http://localhost:5000/userlink/all',{
      headers:{
        access_token:localStorage.getItem('access_token')
      }
    })
    .then((res)=>{
      console.log(res)
      setDatas(res.data.payload)
    })
    .catch((err)=>{
      console.log(err)
    })


    },[])


  return (
    <MainContent>
      {datas &&
        datas.map((data) => {
          return (
            <ContentContainer>
              <HeadText>Carbon footprint historyfor Date :{data.date.split('T')[0]}</HeadText>
              <WebsitesData>
                {data.visited.map((vis) => {
                  return (
                    <IndividualWebsites
                      key={vis.url}
                      data={vis}
                      mostVisited={false}
                    />
                  );
                })}
              </WebsitesData>
            </ContentContainer>
          );
        })}
    </MainContent>
  );
}
const ContentContainer = styled.div`
  width: 100%;
`;
const HeadText = styled.h2`
  color: white;
`;
export default Recent;
