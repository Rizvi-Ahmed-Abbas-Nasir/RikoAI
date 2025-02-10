import { useState, useEffect } from "react";
import styled, { keyframes }  from "styled-components";
// import  UserAvatar  from "../../components/user-Avatar";
// import  BotAvatar  from "../../components/bot-Avatar";
// import  Empty  from "../../components/empty";



const Container = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  font-family: "Arial", sans-serif;
  font-family: "Bluu Next";
`;
const MessageContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;
const MessageItem = styled.div<{ role: string }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  max-width: 75%; 
  word-wrap: break-word;
  overflow-wrap: break-word;
  background-color: ${({ role }) =>
    role === "user" ? "#3b82f6" : "#f3f4f6"}; 
  color: ${({ role }) => (role === "user" ? "white" : "black")};

  align-self: ${({ role }) => (role === "user" ? "flex-end" : "flex-start")};
  border-top-right-radius: ${({ role }) =>
    role === "user" ? "0" : "0.75rem"};
  border-top-left-radius: ${({ role }) =>
    role === "user" ? "0.75rem" : "0"};
`;


const Avatar = styled.div<{ role: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ role }) =>
    role === "user" ? "#3b82f6" : "#9ca3af"};
`;

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.4;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9ca3af; /* Gray for loading dots */
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & ${Dot}:nth-child(1) {
    animation-delay: 0s;
  }
  & ${Dot}:nth-child(2) {
    animation-delay: 0.2s;
  }
  & ${Dot}:nth-child(3) {
    animation-delay: 0.4s;
  }
`;



const Sidebar = styled.div`
  min-height: 100%;
  width: 80px;
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  /* @media (max-width: 768px) {
    width: 50px;
  } */

  & button {
    background: #e6e0e9;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s ease;
    font-size: 2rem;
    &:hover {
      background: #555;
    }
  }
`;

const Menu = styled.div``;

const Actions = styled.div``;

const ContentWrapper = styled.div`
  min-height: 100%;
  padding: 1rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div``;

const SvgIcon = styled.div`
  margin-top: 100px;
  svg {
    width: 8rem;
  }
`;

const Header = styled.header`


  h1 {
    font-size: 3rem;
    font-weight: bold;
    span {
      font-size: 4vw;
    }
  }

  h2 {
    font-weight: normal;
    margin-top: 10px;
    font-size: 3rem;
  }

  @media (max-width: 768px) {
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 20px;
  }
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  /* @media (max-width: 768px) {
    height: 120px;
    padding: 15px;
  } */

  & h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    flex: 1;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  & .icon {
    align-self: flex-end;
    color: #fff;
    opacity: 0.7;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 5rem;
  width: 100%;
  padding: 5px;
  input,
  button {
    outline: none;
    border: none;
    background: transparent;
  }

  input {
    padding: 1rem;
    width: 90%;
  }
  button {
    padding: 1rem 2rem;
    width: 10%;
    background-color: #000;
    border-radius: 5rem;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px;
    & button {
      font-size: 0.9rem;
    }
  }
`;




export default function Chat() {
  const [isChatView, setIsChatView] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [inputValue, setInputValue] = useState<string>("");

  const toggleView = () => {
    setIsChatView(true);
  };

  type ChatCompletionRequestMessage = {
    role: "user" | "assistant" | "system";
    content: string;
  };
    

  const cards = [
    "Generate unit tests for the following C# function",
    "Help write SQL to generate a report",
    "Teach me the concept of game theory in simple terms",
    "Walk me through how to apply for a new role",
  ];

 

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  
  const handleOnChange = (e: any) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const payload = {
        model: "llama3.2",
        messages: [{ role: "user", content: inputValue }],
      };
  
      console.log("Payload Sent:", payload);

      setMessages((current) => [
        ...current,
        { role: "user", content: inputValue },
      ]);
  
      const response = await fetch("https://riko-backend.vercel.app/api/RikoChat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
  
      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
  
      if (!reader) {
        throw new Error("Failed to read response stream.");
      }
  
      let isDone = false;
      let accumulatedContent = "";
  
      while (!isDone) {
        const { value, done } = await reader.read();
        isDone = done;
  
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          console.log("Received chunk:", chunk);
  
          const parsedChunks = chunk
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map((line) => JSON.parse(line));
  
          for (let i = 0; i < parsedChunks.length; i++) {
            accumulatedContent += parsedChunks[i].content;
            setMessages((current) => [
              ...current.filter((msg) => msg.role !== "assistant"),
              { role: "assistant", content: accumulatedContent },
            ]);
            
            await new Promise((resolve) => setTimeout(resolve, 50)); 
          }
        }
      }

      
      
      setInputValue(""); 
    } catch (error) {
      console.error("Error communicating with the API:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  


  return (
    <>
      <Container>
        <Sidebar>
          <Menu>
            <button>+</button>
          </Menu>
          <Actions></Actions>
        </Sidebar>
        <ContentWrapper>
        <form
        className="FormChat"
           onSubmit={handleOnSubmit}
          >
          <Content>
          {!isChatView ? (
        <div>
           <SvgIcon>
              <svg
                viewBox="0 0 74 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </SvgIcon>
          <Header>
            <h1>
              <span>Hello,</span> There
            </h1>
            <h2>How can I help you today?</h2>
          </Header>
          <CardGrid>
            {cards.map((text, index) => (
              <Card key={index} onClick={toggleView}>
                <h3>{text}</h3>
              </Card>
            ))}
          </CardGrid>
        </div>
      ) : (
        <MessageContainerWrapper>
        {messages.length === 0 && !isLoading && (
          <div style={{ textAlign: "center", color: "#6b7280" }}>
            No messages yet!
          </div>
        )}
      
        {messages.map((message, index) => (
          <MessageItem role={message.role} key={index}>
           
            {message.role === "assistant" && <Avatar role="assistant" />}
            {message.role === "user" && <Avatar role="user" />}
      
  
            <p style={{ margin: 0 }}>{message.content}</p>
          </MessageItem>
        ))}
      
        {isLoading && (
          <LoadingWrapper>
            <Avatar role="assistant" />
            <Dot />
            <Dot />
            <Dot />
          </LoadingWrapper>
        )}
      </MessageContainerWrapper>
      

  
      )}
          </Content>
        
          <InputWrapper>
            <input
              type="text"
              placeholder="Enter a promot here"
              onChange={handleOnChange}
            />
            <button onClick={toggleView} type="submit" >Let’s Talk</button>
          </InputWrapper>
          </form>

        </ContentWrapper>
      </Container>
    </>
  );
}
