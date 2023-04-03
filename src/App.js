import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Wrapper from "./Pages/Wrapper";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
