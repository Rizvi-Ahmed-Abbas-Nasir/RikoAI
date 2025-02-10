import styled from "styled-components";
import footerImg from "../assets/Images/footerImg.png";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  overflow: hidden;
  padding-top: 8rem;
`;

const Title = styled.div`
  p {
    font-size: 1rem;
    text-transform: uppercase;
    opacity: 0.6;
  }
  h3 {
    font-size: 2.8vw;
    font-family: "Bluu Next";
  }
`;

const CtaButton = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1rem 2rem;
  border-radius: 4rem;
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  height: 50%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Title>
        <p>Discover next</p>
        <h3>
          Talent is everywhere <br />
          opportunity should be too.
        </h3>
      </Title>
      <CtaButton>Contact Us</CtaButton>
      <ImageWrapper>
        <img src={footerImg} alt="" />
      </ImageWrapper>
    </Container>
  );
}
