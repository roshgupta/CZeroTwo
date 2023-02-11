import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import IndividualWebsites from "../Dashboard/IndividualWebsites";
import { MainContent, WebsitesData } from "../DashboardPages/AllLinks";

function Recent() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/userlink/all", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        setDatas(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContent>
      {datas &&
        datas.map((data) => {
          return (
            <ContentContainer>
              <HeadText>Carbon footprint historyfor Date :{data.date}</HeadText>
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
  text-align: center;
  color: white;
`;
export default Recent;
