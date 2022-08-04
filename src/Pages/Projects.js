import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { OuterBox } from "../Components/Box";
import { ShortDivider } from "../Components/Divider";
import { OuterFit, OuterIcon } from "../Components/Button";
import projects from "../Data/projects.json";

import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Projects() {
  useEffect(() => {
    document.title = 'Projects | Daffa Kurnia Fatah'
  }, []);

  return (
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
        <Row className="mt-4 justify-content-center">
          {projects.map(function (project) {
            if (project.type === "Design") {
              return (
                <Col xxl='6' className="mb-3">
                  <OuterBox>
                    <Row>
                      <Col sm='7'>
                        <div className="project-content">
                          <h4 className="project-name">{project.name}</h4>
                          <ShortDivider />
                          <p className="project-desc mt-3">
                            {project.description}
                          </p>
                          <div className="project-link">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <OuterFit>See the prototype</OuterFit>
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col sm='5'>
                        <div className="h-100 d-flex align-items-center justify-content-center">
                          <Image src={"img/projects/" + project.image} fluid></Image>
                        </div>
                      </Col>
                    </Row>
                  </OuterBox>
                </Col>
              )
            }
          })}
        </Row>
      </div>
      <div className="project-web mt-4">
        <div className="d-flex align-items-center gap-3">
          <OuterIcon>
            <Image src="img/icons/web-icon.svg"></Image>
          </OuterIcon>
          <h3 className="project-section-title">Website Projects</h3>
        </div>
        <Row className="mt-4 justify-content-center">
          {projects.map(function (project) {
            if (project.type === 'Website') {
              return (
                <Col xxl='4' md='6' className="mb-3">
                  <OuterBox>
                    <div className="project-content">
                      <h4 className="project-name">{project.name}</h4>
                      <ShortDivider />
                      <h5 className="project-category mt-3">{project.category}</h5>
                      <p className="project-desc mt-3">
                        {project.description}
                      </p>
                      <Image rounded fluid src={"img/projects/" + project.image} className="mt-3"></Image>
                      <div className="d-flex gap-3 mt-4">
                        {project.technology.map(function (tech) {
                          return (
                            <OuterIcon>
                              <Image src={"img/icons/" + tech.icon}></Image>
                            </OuterIcon>
                          )
                        })}
                      </div>
                    </div>
                  </OuterBox>
                </Col>
              )
            }
          })}
        </Row>
      </div>
      <div className="project-mobile mt-4">
        <div className="d-flex align-items-center gap-3">
          <OuterIcon>
            <Image src="img/icons/android-icon.svg"></Image>
          </OuterIcon>
          <h3 className="project-section-title">Mobile App</h3>
        </div>
        <Row className="mt-4 justify-content-center">
          {projects.map(function (project) {
            if (project.type === 'Mobile') {
              return (
                <Col xxl='6' className="mb-3">
                  <OuterBox>
                    <Row>
                      <Col sm='7' md='9' xxl='7'>
                        <div className="project-content">
                          <h4 className="project-name">{project.name}</h4>
                          <ShortDivider />
                          <p className="project-desc mt-3">
                            {project.description}
                          </p>
                          <div className="project-link">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <OuterFit>See the prototype</OuterFit>
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col sm='5' md='3' xxl='5'>
                        <div className="h-100 d-flex align-items-center justify-content-center">
                          <Swiper
                            spaceBetween={30}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            pagination={{
                              clickable: true,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                          >
                            {project.image.map(function (image) {
                              return (
                                <SwiperSlide>
                                  <Image fluid src={"img/projects/" + image}></Image>
                                </SwiperSlide>
                              )
                            })}
                          </Swiper>
                        </div>
                      </Col>
                    </Row>
                  </OuterBox>
                </Col>
              )
            }
          })}
        </Row>
      </div>
    </div>
  )
}

export default Projects;