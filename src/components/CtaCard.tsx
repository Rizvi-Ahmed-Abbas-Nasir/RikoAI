import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  height: 50vh;
  margin: 8rem 8rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 2.8vw;
  font-family: "Bluu Next";
`;

const CtaButton = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1rem 2rem;
  border-radius: 4rem;
  margin-top: 2rem;
`;

export default function CtaCard() {
  return (
    <Container>
      <Title>
        Riko has no limitation. <br /> Get Started in a journey with
        promptverse.
      </Title>
      <CtaButton>Create an Acoount</CtaButton>
    </Container>
  );
}
