import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
`;

const Title = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    line-height: 1;
    font-family: "Bluu Next";
    font-size: 4vw;
  }
  .description {
    font-size: 1rem;
    margin-top: 2rem;
    width: 30%;
    font-family: "Poppins", serif;
    font-weight: 400;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
`;

const Card = styled.div`
  background-color: #f2e2c17f;
  &.primary {
    background-color: #f2e2c1;
    border: 1px solid #0000003a;
  }
  width: 25%;
  padding: 2rem;
  border-radius: 0.3rem;
  .pricing_title_wrapper {
    .pricing_title {
      font-size: 1.3rem;
      font-weight: 400;
    }
    .pricing_description {
      font-size: 1rem;
      font-weight: 300;
    }
  }
  .pricing {
    font-size: 3rem;
    font-weight: 500;
    margin: 2rem 0;
    span {
      font-size: 1rem;
      color: #4f4f4f;
      font-weight: 400;
    }
  }
  .pricing_btn {
    background-color: #000;
    color: #fff;
    outline: none;
    border: none;
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0.2rem;
  }
  .divider {
    height: 1px;
    width: 100%;
    background-color: #00000027;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .features {
    .features_title {
      font-weight: 500;
    }
    ul {
      margin-top: 1rem;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        font-size: 0.95rem;
        margin-top: 1rem;
        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export default function PricingSection() {
  return (
    <Container>
      <Title>
        <h1>
          Discover Plan With <br /> the Best Pricing
        </h1>
        <p className="description">
          Select from best plan, ensuring a perfect match. Need more or less?
          Customize your subscription for a seamless fit!
        </p>
      </Title>
      <CardsWrapper>
        <Card>
          <div className="pricing_title_wrapper">
            <h4 className="pricing_title">Basic</h4>
            <h4 className="pricing_description">Best for personal use.</h4>
          </div>
          <h3 className="pricing">Free</h3>
          <button className="pricing_btn">Get Started</button>
          <div className="divider"></div>
          <div className="features">
            <h4 className="features_title">What you will get</h4>
            <ul>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Employee directory
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Task management
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Calendar integration
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                File storage
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Communication tools
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Reporting and analytics
              </li>
            </ul>
          </div>
        </Card>
        <Card className="primary">
          <div className="pricing_title_wrapper">
            <h4 className="pricing_title">Enterprise</h4>
            <h4 className="pricing_description">
              For large teams & coroprations.
            </h4>
          </div>
          <h3 className="pricing">
            199₹<span>/ per month</span>
          </h3>
          <button className="pricing_btn">Get Started</button>{" "}
          <div className="divider"></div>
          <div className="features">
            <h4 className="features_title">What you will get</h4>
            <ul>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Employee directory
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Task management
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Calendar integration
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                File storage
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Communication tools
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Reporting and analytics
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className="pricing_title_wrapper">
            <h4 className="pricing_title">Business</h4>
            <h4 className="pricing_description">Best for business owners.</h4>
          </div>
          <h3 className="pricing">
            499₹<span>/ per month</span>
          </h3>
          <button className="pricing_btn">Get Started</button>{" "}
          <div className="divider"></div>
          <div className="features">
            <h4 className="features_title">What you will get</h4>
            <ul>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Employee directory
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Task management
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Calendar integration
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                File storage
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Communication tools
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7133 3.29997C15.36 5.94664 15.3133 10.2666 12.58 12.8599C10.0533 15.2533 5.95331 15.2533 3.41998 12.8599C0.67998 10.2666 0.633305 5.94664 3.28664 3.29997C5.88664 0.693304 10.1133 0.693304 12.7133 3.29997Z"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.16666 7.99995L7.05332 9.88661L10.8333 6.11328"
                    stroke="black"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Reporting and analytics
              </li>
            </ul>
          </div>
        </Card>
      </CardsWrapper>
    </Container>
  );
}
