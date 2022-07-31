import { Col, Container, Row } from "react-bootstrap";
import { InnerOuterBox } from "../Components/InnerOuterBox";
import Menu from "../Components/Menu";

function About() {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 3, order: 'last' }}>
          <Menu>About</Menu>
        </Col>
        <Col lg={{ span: 9, order: 'first' }}>
          <div id="content">
            <InnerOuterBox>
              <div className="about">
                <h1>About</h1>
              </div>
            </InnerOuterBox>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;