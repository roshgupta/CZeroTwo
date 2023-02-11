import React, { useState, useEffect,useContext} from "react";
import styled from "styled-components";
import IndividualWebsites from "../Dashboard/IndividualWebsites";
import axios from "axios";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";


const AllLInks = () => {
  const [datas, setDatas] = useState(null);
  const [individual, setIndividual] = useState(null);

  const navigate = useNavigate();
  const {auth}= useContext(AuthContext)
  if(auth==false){
    navigate('/login')
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/userlink/top", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        setDatas(res.data.arr);
        setIndividual(res.data.arr[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    datas && (
      <MainContent>
        <Header>
          <div className="most-visited">
            {individual && (
              <IndividualWebsites
                key={individual.url}
                data={individual}
                mostVisited={true}
              />
            )}
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
    )
  );
};

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
export const WebsitesData = styled.div`
  width: 100%;
`;

export const MainContent = styled.main`
  width: 100%;
  padding: 32px;
  color: white;
  height: 90vh;
  overflow-y: scroll;
`;
const HeadText = styled.h1``;

export default AllLInks;
