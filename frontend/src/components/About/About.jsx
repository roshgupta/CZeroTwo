import styled from "styled-components";
import Card from "./Card";

const About = () => {
  return (
    <Container>
      <AboutUs>
        <h1>About Us</h1>
        <p>We study at NITK and build awesome projects.</p>
        <p>This website and extension was made for TRI-NITK-Hackathon.</p>
      </AboutUs>

      <SecondaryHeader>Our Team</SecondaryHeader>
      <CardContainer>
        <Card
          src={
            "https://ik.imagekit.io/niceedu/1_kNDAfV_ZY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676135825503"
          }
          name={"Roshan Gupta"}
          title={"Developer and Designer"}
          email={"gpta.duke.rohan.1219@gmail.com"}
        />
        <Card
          src={
            "https://ik.imagekit.io/niceedu/3_34Lt-vrG3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676135825529"
          }
          name={"Sharique Nadim"}
          title={"Developer and Designer"}
          email={"sharique@gmail.com"}
        />
        <Card
          src={
            "https://ik.imagekit.io/niceedu/2_qZDvU6iIO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676135825619"
          }
          name={"Aneesh Kulkarni"}
          title={"Developer and Designer"}
          email={"aneesh@gmail.com"}
        />
      </CardContainer>
    </Container>
  );
};

const CardContainer = styled.div`
  padding: 32px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
const AboutUs = styled.div`
  text-align: center;
  color: white;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 20px;
  }
`;
const SecondaryHeader = styled.h2`
  text-align: center;
  color: white;
  margin-top: 20px;
  font-size: 32px;
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.07);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.6px);
  -webkit-backdrop-filter: blur(3.6px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 64px 0px;
`;

export default About;
