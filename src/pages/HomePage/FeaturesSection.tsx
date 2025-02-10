import styled from "styled-components";

import image1 from "../../assets/Images/image.png";
import WhatWeDo from "./WhatWeDo";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  border-top-right-radius: 6rem;
  border-top-left-radius: 6rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 4rem;
  padding: 6rem 6rem;
  padding-bottom: 0;
  h1 {
    font-size: 3vw;
    font-family: "Bluu Next";
  }
  p {
    font-family: "Fira Code", serif;
    font-size: 0.9rem;
    width: 30%;
  }
`;

const ContentWrapper = styled.div`
  padding: 6rem 6rem;
  padding-top: 3rem;
  .row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function FeaturesSection() {
  return (
    <Container>
      <WhatWeDo />
      <Title>
        <h1>
          One Prompt. <br />
          Infinite Outcomes.
        </h1>
        <p>
          Riko is your AI creative assistant in Figma, turning prompts into
          gorgeous designs.
        </p>
      </Title>

      <ContentWrapper>
        <div className="row">
          <ImageWrapper>
            <img src={image1} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image1} alt="" />
          </ImageWrapper>
        </div>
        <div className="row">
          <ImageWrapper>
            <img src={image1} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image1} alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={image1} alt="" />
          </ImageWrapper>
        </div>
      </ContentWrapper>
    </Container>
  );
}
