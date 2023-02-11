import styled from "styled-components";

const Card = ({ src, name, title, email }) => {
  return (
    <StyledCard>
      <img src={src} />
      <Details>
        <h2>{name}</h2>
        <p>{title}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </Details>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  border-radius: 16px;
  overflow: hidden;
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
`;

const Details = styled.div`
  padding: 16px;
  color: white;
  text-align: center;
  a {
    color: white;
    text-decoration: none;
  }
`;

export default Card;
