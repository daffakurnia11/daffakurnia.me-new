import { Routes, Route } from "react-router-dom";
import Background from "./Components/Background";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
