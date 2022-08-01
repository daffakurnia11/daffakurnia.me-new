import { Col, Container, Image, Row } from "react-bootstrap";
import { InnerOuterBox, OuterBox } from "../Components/Box";
import Menu from "../Components/Menu";
import { ShortDivider } from "../Components/Divider";
import { OuterFit, OuterIcon } from "../Components/Button";
import { Link } from "react-router-dom";

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
              <div className="project">
                <h2 className="project-title">Projects</h2>
                <ShortDivider />
                <p className="project-subtitle mt-4">Showcase of my works as Software Engineers</p>
                <div className="project-ui mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <OuterIcon>
                      <Image src="img/icons/figma-icon.svg"></Image>
                    </OuterIcon>
                    <h3 className="project-section-title">UI Design using Figma</h3>
                  </div>
                  <Row className="mt-4">
                    <Col xxl='6' className="mb-3">
                      <OuterBox>
                        <Row>
                          <Col sm='7'>
                            <div className="project-content">
                              <h4 className="project-content-name">Infaqlillah Design App</h4>
                              <ShortDivider />
                              <p className="project-content-desc mt-3">
                                Designing an application to fulfill the study case on the UX Design Submission in the Dicoding Academy Course
                              </p>
                              <div className="project-content-link">
                                <a>
                                  <OuterFit>See the prototype</OuterFit>
                                </a>
                              </div>
                            </div>
                          </Col>
                          <Col sm='5'>
                            <div className="h-100 d-flex align-items-center justify-content-center">
                              <Image src="img/projects/ui-infaqlillah.png" fluid></Image>
                            </div>
                          </Col>
                        </Row>
                      </OuterBox>
                    </Col>
                    <Col xxl='6' className="mb-3">
                      <OuterBox>
                        <Row>
                          <Col sm='7'>
                            <div className="project-content">
                              <h4 className="project-content-name">Personal Website Design</h4>
                              <ShortDivider />
                              <p className="project-content-desc mt-3">
                                Designing a personal website for my own website to showcase my experiences and portfolios
                              </p>
                              <div className="project-content-link">
                                <a>
                                  <OuterFit>See the prototype</OuterFit>
                                </a>
                              </div>
                            </div>
                          </Col>
                          <Col sm='5'>
                            <div className="h-100 d-flex align-items-center justify-content-center">
                              <Image src="img/projects/ui-personalweb.png" fluid></Image>
                            </div>
                          </Col>
                        </Row>
                      </OuterBox>
                    </Col>
                  </Row>
                </div>
                <div className="project-web mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <OuterIcon>
                      <Image src="img/icons/web-icon.svg"></Image>
                    </OuterIcon>
                    <h3 className="project-section-title">Website Projects</h3>
                  </div>
                </div>
                <div className="project-mobile mt-4">
                  <div className="d-flex align-items-center gap-3">
                    <OuterIcon>
                      <Image src="img/icons/android-icon.svg"></Image>
                    </OuterIcon>
                    <h3 className="project-section-title">Mobile App</h3>
                  </div>
                </div>
              </div>
            </InnerOuterBox>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects;