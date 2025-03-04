import styled from "styled-components";

const Container = styled.div``;

const ChatIcon = styled.div`
  background-color: #000;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 2rem;
  height: 4rem;
  width: 4rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ChatPopup() {
  return (
    <Container>
      <ChatIcon>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.625 9.1875V5.25C16.625 4.2835 15.8415 3.5 14.875 3.5H4.375C3.4085 3.5 2.625 4.2835 2.625 5.25V12.0978C2.625 13.0643 3.4085 13.8478 4.375 13.8478H5.74457V17.5L9.39674 13.8478H9.625M14.1427 16.0924L16.4253 18.375V16.0924H16.625C17.5915 16.0924 18.375 15.3089 18.375 14.3424V11.375C18.375 10.4085 17.5915 9.625 16.625 9.625H11.375C10.4085 9.625 9.625 10.4085 9.625 11.375V14.3424C9.625 15.3089 10.4085 16.0924 11.375 16.0924H14.1427Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ChatIcon>
    </Container>
  );
}
