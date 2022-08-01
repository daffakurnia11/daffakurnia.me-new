import { Col, Container, Image, Row } from "react-bootstrap";
import { InnerOuterBox } from "../Components/InnerOuterBox";
import Menu from "../Components/Menu";
import { ShortDivider } from "../Components/Divider";

function Projects() {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, order: 'last' }} xxl="3">
          <Menu>Projects</Menu>
        </Col>
        <Col lg={{ span: 8, order: 'first' }} xxl="9">
          <div id="content">
            <InnerOuterBox>
              <div className="projects">
                <h2 className="projects-title">Projects</h2>
                <ShortDivider />
              </div>
            </InnerOuterBox>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;