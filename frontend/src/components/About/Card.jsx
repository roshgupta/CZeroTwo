import styled from "styled-components";

const Card = ({ src, name, title, email }) => {
  return (
    <StyledCard>
      <img src={src} alt="Jane" />
      <Details className="container">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p></p>
        <p>{email}</p>
      </Details>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius: 15px;
`;

const Details = styled.div`
  padding: 0 16px;
  color: white;
  text-align: center;
`;

export default Card;
