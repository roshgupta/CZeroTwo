import React from "react";
import styled from "styled-components";

const IndividualWebsites = ({ data, mostVisited }) => {
  const version1 = <div className="link">{data.url}</div>;
  const version2 = (
    <div>
      {" "}
      <div>Your most visited website is</div>
      <div className="link">{data.url}</div>
    </div>
  );
  return (
    <StyledIndividualWebsites mostVisited={mostVisited}>
      {mostVisited ? version2 : version1}
      <Statitics>
        <div className="data-usages-till-date">
          Data used till today <span>{data.value}</span>
          <span>KB</span>
        </div>
        <div className="carbon-footprint">
          CO<sub>2</sub> emission caused by website is{" "}
          <span>{data.carbon}gm.</span>
        </div>
      </Statitics>
    </StyledIndividualWebsites>
  );
};
const StyledIndividualWebsites = styled.div`
  width: 100%;
  padding: 16px 32px;
  background-color: #b9f8d5;
  border-radius: 4px;
  margin: 12px 0px;
  color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => {
    if (props.mostVisited) {
      return `  .link {
    color: #f28702;
  }`;
    }
  }}
`;
const Statitics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  div {
    margin: 2px 0px;
    span {
      color: #f28702;
    }
  }
`;

export default IndividualWebsites;
