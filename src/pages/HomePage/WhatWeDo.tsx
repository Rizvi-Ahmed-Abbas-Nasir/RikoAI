import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100svh;
  background-color: #ecba51;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 35rem;
  height: 35rem;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    scale: 1.1;
    border-radius: 50%;
    /* overflow: hidden; */
  }
  .image2 {
    position: relative;
    z-index: 2;
    scale: 1;
  }
`;

const Text = styled.h1`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #000;
  font-size: 8rem;
  font-weight: 500;
  /* transform: translateX(10%); */
`;

export default function WhatWeDo() {
  const containerRef = useRef<any>(null);
  const textRef = useRef<any>(null);
  const imageRef = useRef<any>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
      },
    });

    tl.to(textRef.current, {
      xPercent: -200,
    })
      .to(imageRef.current, { scale: 1 }, "<")
      .to(
        ".image2",
        {
          yPercent: -100,
        },
        "<"
      )
      .to(
        containerRef.current,
        {
          backgroundColor: "green",
        },
        "<"
      );
  }, []);
  return (
    <Container ref={containerRef}>
      <ImageWrapper>
        <img
          ref={imageRef}
          src="https://cdn.prod.website-files.com/623054deec62ef6ddf8eba8b/6294fda9387784841d8092c6_social-media.jpg"
          alt=""
        />
        <img
          className="image2"
          ref={imageRef}
          src="https://cdn.prod.website-files.com/623054deec62ef6ddf8eba8b/6294fdeb5a7a7058fcd10645_branding.jpg"
          alt=""
        />
      </ImageWrapper>
      <Text ref={textRef}>What We do?</Text>
    </Container>
  );
}
