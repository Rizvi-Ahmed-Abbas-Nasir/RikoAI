import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100svh;
  .description {
    font-family: "Fira Code", serif;
    width: 60%;
    font-size: 0.9rem;
    margin-top: 2rem;
  }
`;

const SvgWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: "Bluu Next";
  font-size: 4.5vw;
  line-height: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  a {
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 3rem;
    text-decoration: none;
    font-size: 1rem;
  }
  .second_btn {
    background-color: #fff;
    color: #000;
  }
`;

export default function HeroSection() {
  return (
    <Container>
      <SvgWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="59"
          viewBox="0 0 74 59"
          fill="none"
        >
          <mask
            id="mask0_5_237"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="74"
            height="59"
          >
            <path d="M74 0.699219H0V58.6992H74V0.699219Z" fill="white" />
          </mask>
          <g mask="url(#mask0_5_237)">
            <path
              d="M28.6286 10.2993H25.0286V16.2993H28.6286V10.2993Z"
              fill="#18181B"
            />
            <path
              d="M26.8285 15.1986C24.5089 15.1986 22.6285 13.3182 22.6285 10.9986C22.6285 8.67901 24.5089 6.7986 26.8285 6.7986C29.148 6.7986 31.0285 8.67901 31.0285 10.9986C31.0285 13.3182 29.148 15.1986 26.8285 15.1986Z"
              fill="black"
              stroke="#18181B"
              stroke-width="3.6"
            />
            <path
              d="M31.4 16.8991H43.4C56.9862 16.8991 68 27.9129 68 41.4991V84.0991H6.79999V41.4991C6.79999 27.9129 17.8138 16.8991 31.4 16.8991Z"
              fill="#FFAA56"
              stroke="#1B1B18"
              stroke-width="3.6"
            />
            <path
              d="M27.2 31.6992H47.6C53.2333 31.6992 57.8 36.2659 57.8 41.8993V68.2993C57.8 68.6306 57.5313 68.8993 57.2 68.8993H17.6C17.2686 68.8993 17 68.6306 17 68.2993V41.8992C17 36.2659 21.5666 31.6992 27.2 31.6992Z"
              fill="white"
              stroke="black"
              stroke-width="3.6"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M46.6 38.6992C45.9373 38.6992 45.4 39.2365 45.4 39.8992V43.4992C45.4 44.162 45.9373 44.6993 46.6 44.6993H47.8C48.4628 44.6993 49 44.162 49 43.4992V39.8992C49 39.2365 48.4628 38.6992 47.8 38.6992H46.6ZM26.2 38.6993C25.5373 38.6993 25 39.2365 25 39.8993V43.4993C25 44.162 25.5373 44.6993 26.2 44.6993H27.4C28.0628 44.6993 28.6 44.162 28.6 43.4993V39.8993C28.6 39.2365 28.0628 38.6993 27.4 38.6993H26.2Z"
              fill="#18181B"
            />
            <path
              d="M40.0664 47.6992C40.7292 47.6992 41.283 48.247 41.0962 48.8829C41.054 49.0264 41.0042 49.1677 40.9467 49.3064C40.7357 49.816 40.4263 50.279 40.0363 50.669C39.6463 51.059 39.1833 51.3684 38.6737 51.5794C38.1642 51.7905 37.618 51.8992 37.0664 51.8992C36.5149 51.8992 35.9687 51.7905 35.4592 51.5794C34.9496 51.3684 34.4866 51.059 34.0966 50.669C33.7066 50.279 33.3972 49.816 33.1862 49.3064C33.1287 49.1677 33.0789 49.0264 33.0367 48.8829C32.8499 48.247 33.4037 47.6992 34.0664 47.6992H37.0664H40.0664Z"
              fill="#18181B"
            />
            <path
              d="M71 54.6992H3C1.89543 54.6992 1 55.5946 1 56.6992C1 57.8038 1.89543 58.6992 3 58.6992H71C72.1046 58.6992 73 57.8038 73 56.6992C73 55.5946 72.1046 54.6992 71 54.6992Z"
              fill="#18181B"
            />
          </g>
        </svg>
      </SvgWrapper>
      <Title>
        Powerful for developers. <br /> Fast for everyone.
      </Title>
      <p className="description">
        Bring blockchain to the people. Solana supports experiences for power
        users, new consumers, and everyone in between.
      </p>
      <ButtonWrapper>
        <Link to="/chat">Start PROMTING</Link>
        <a href="" className="second_btn">
          Read docs
        </a>
      </ButtonWrapper>
    </Container>
  );
}
