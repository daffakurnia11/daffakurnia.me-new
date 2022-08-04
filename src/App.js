import { Routes, Route } from "react-router-dom";
import Background from "./Components/Background";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experiences from "./Pages/Experiences";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Menu from "./Components/Menu";
import { InnerOuterBox } from "./Components/Box";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Background />
      <Container>
        <Row>
          <Col lg={{ span: 4, order: 'last' }} xxl="3">
            <Menu />
          </Col>
          <Col lg={{ span: 8, order: 'first' }} xxl="9">
            <div id="content">
              <InnerOuterBox>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/experiences" element={<Experiences />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </InnerOuterBox>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
