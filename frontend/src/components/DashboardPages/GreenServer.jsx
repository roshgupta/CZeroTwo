import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function GreenServer() {
  const [url, setUrl] = useState("");
  const [answer, setAnswer] = useState(null);

  const changeUrl = (e) => {
    setUrl(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api", {
        url,
      })
      .then((res) => {
        setAnswer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const urlParser = (url) => {
    const urlArray = url.split("/");
    return urlArray[2];
  };
  return (
    <Container>
      <Header>Check out how optimized your favourite website is!!</Header>

      <InnerContainer>
        <form onSubmit={formSubmit} action="">
          <StyledLabel htmlFor="">Type the Domain name here</StyledLabel>

          <StyledInput
            type="text"
            placeholder="For ex. https://www.youtube.com"
            value={url}
            onChange={changeUrl}
          />

          <StyledButton>Find out!</StyledButton>
        </form>

        {answer && (
          <>
            <Answer isGreen={answer.green}>
              <div>
                Results for <span> {urlParser(answer.url)}</span>
              </div>
              <div className="stats">
                <div className="is-green">
                  {answer.green
                    ? "This website runs on green server."
                    : "This website does not runs on green server."}
                </div>
                <div>
                  This websites usages average{"  "}
                  <span>{(answer.bytes / 1024).toFixed(2)}KB</span>
                  {"  "}
                  to load.
                </div>
                <div>
                  This websites is dirtier than{"  "}
                  <span>{100 - answer.cleanerThan * 100}%</span> websites.
                </div>
              </div>
            </Answer>
          </>
        )}
      </InnerContainer>
    </Container>
  );
}
const Answer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 16px;
  font-size: 15px;
  border-radius: 5px;

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${(props) =>
    props.isGreen
      ? `.is-green{color:rgba(2, 93, 91, 1);}`
      : `.is-green{color:red;}`}
  span {
    color: rgba(2, 93, 91, 1);
  }
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
  border: 2px solid grey;

  outline: none;
  &:hover {
    outline: 2px solid #b3b6ba;
  }
`;
const StyledButton = styled.button`
  margin: 16px 0px;
  width: 100%;
  background-color: #ffffff;
  color: rgba(2, 93, 91, 1);
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #b9f8d5;
  }
`;
const InnerContainer = styled.div`
  min-height: 300px;
  width: 500px;
  margin-top: 32px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 32px;
  color: white;
`;
const StyledLabel = styled.label`
  display: block;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 64px 0px;
`;
const Header = styled.h1`
  font-size: 36px;
  color: white;
`;

export default GreenServer;
