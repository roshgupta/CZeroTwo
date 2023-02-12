import React, { useState,useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Use() {
  const [url, setUrl] = useState("");

  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const {auth}= useContext(AuthContext)
  if(auth==false){
    navigate('/login')
  }

  const changeUrl = (e) => {
    setUrl(e.target.value);
  };

  const formSubmit_=(e)=>{
    e.preventDefault()
    axios.get(`http://localhost:5000/userlink/${url}`,{
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <Header>Check out how much carbon was used by you</Header>
      <InnerContainer>
        <form onSubmit={formSubmit_} action="">
          <StyledLabel htmlFor="">Type domain name</StyledLabel>
          <StyledInput
            type="text"
            value={url}
            onChange={changeUrl}
            placeholder="For ex. www.youtube.com"
          />

          <StyledButton>Submit</StyledButton>
        </form>

        {data && (
          <Answer>
            <div>{data.url}</div>
            <div className="stats">
              <div>
                Total data used <span>{data.value.toFixed(2)}KB</span>
              </div>
              <div>
                CO<sub>2</sub> emission :{" "}
                <span>{data.carbon.toFixed(2)}gm</span>
              </div>
            </div>
          </Answer>
        )}
      </InnerContainer>
    </Container>
  );
}
const Answer = styled.div`
  width: 100%;
  padding: 16px 32px;
  background-color: #b9f8d5;
  border-radius: 4px;
  margin: 12px 0px;
  color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stats {
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
export default Use;
