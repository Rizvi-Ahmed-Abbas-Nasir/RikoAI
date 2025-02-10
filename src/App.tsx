import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Chat from "./pages/Chat/Chat";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
