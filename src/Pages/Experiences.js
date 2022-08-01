import { Col, Container, Image, Row } from "react-bootstrap";
import { InnerOuterBox } from "../Components/Box";
import Menu from "../Components/Menu";
import { ShortDivider } from "../Components/Divider";
import { OuterFull, OuterIcon, OuterSmallIcon } from "../Components/Button";

function Experiences() {
  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, order: 'last' }} xxl="3">
          <Menu>Experiences</Menu>
        </Col>
        <Col lg={{ span: 8, order: 'first' }} xxl="9">
          <div id="content">
            <InnerOuterBox>
              <div className="experiences">
                <div className="skills">
                  <h2 className="skills-section">Professional Skills</h2>
                  <ShortDivider />
                  <Row className="mt-4 justify-content-center">
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/github-icon.svg"></Image>
                          Github
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/figma-icon.svg"></Image>
                          Figma
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/sass-icon.svg"></Image>
                          Sass
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/bootstrap-icon.svg"></Image>
                          Bootstrap
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/react-icon.svg"></Image>
                          ReactJS
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/codeigniter-icon.svg"></Image>
                          Codeigniter
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/laravel-icon.svg"></Image>
                          Laravel
                        </div>
                      </OuterFull>
                    </Col>
                    <Col xl='3' md='4' sm='6' className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src="img/icons/kotlin-icon.svg"></Image>
                          Kotlin
                        </div>
                      </OuterFull>
                    </Col>
                  </Row>
                </div>
                <div className="experience mt-4">
                  <h2 className="experience-section">Experiences</h2>
                  <ShortDivider />
                  <div className="jobs mt-3">
                    <OuterIcon>
                      <Image src="img/icons/suitcase-icon.svg"></Image>
                    </OuterIcon>
                    <div className="section-content pt-2">
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Coordinator of Laboratory Assistant</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          March 2022 - <span className="present-highlight">Present</span>
                        </div>
                        <p className="list-place mt-2">At Embedded and Cyber-physics System Laboratory, Institut Teknologi Sepuluh Nopember</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Founder and Full Stack Web Developer</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          April 2021 - <span className="present-highlight">Present</span>
                        </div>
                        <p className="list-place mt-2">At Breakpoint Indonesia, Surabaya</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Extracurricular Coach</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          January 2020 - <span className="present-highlight">Present</span>
                        </div>
                        <p className="list-place mt-2">At Robotics Extracurricular, Public Senior High School 1 Sidoarjo</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Coordinator of Web Development</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          November 2021 - May 2022
                        </div>
                        <p className="list-place mt-2">At Petrolida 2022 by Society of Petroleum Engineer (SPE) ITS Student Chapter</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">IT Manager</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          October 2021 - February 2022
                        </div>
                        <p className="list-place mt-2">At Engineering Physics Week (EPW) 2022, Institut Teknologi Sepuluh Nopember</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Head of Web Development</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          August 2021 - June 2022
                        </div>
                        <p className="list-place mt-2">At Society of Petroleum Engineers (SPE) ITS Student Chapter</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Expert Staff of Web Development</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          July 2020 - August 2021
                        </div>
                        <p className="list-place mt-2">At Gerigi ITS 2021, Institut Teknologi Sepuluh Nopember</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Staff of IT Developer</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          December 2020 - March 2021
                        </div>
                        <p className="list-place mt-2">At Ini Lho ITS! 2021, Institut Teknologi Sepuluh Nopember</p>
                      </div>
                    </div>
                  </div>
                  <div className="competition mt-3">
                    <OuterIcon>
                      <Image src="img/icons/competition-icon.svg"></Image>
                    </OuterIcon>
                    <div className="section-content pt-2">
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Mobile Development Cohort Bangkit 2022</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          February 2022 - July 2022
                        </div>
                        <p className="list-place mt-2">By Bangkit Academy 2022 supported by Google, GoTo, Traveloka, and Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Alibaba Cloud AI Forward 2021</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          October 2021
                        </div>
                        <p className="list-place mt-2">By Alibaba Cloud Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1">Re-Cloud Challenges Indonesia 2021</h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          March 2021
                        </div>
                        <p className="list-place mt-2">By Alibaba Cloud, TIANCHY, and Codepolitan </p>
                      </div>
                    </div>
                  </div>
                  <div className="certification mt-3">
                    <OuterIcon>
                      <Image src="img/icons/certificate-icon.svg"></Image>
                    </OuterIcon>
                    <div className="section-content pt-2">
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Memulai Dasar Pemrograman untuk Menjadi Pengembang Software
                          <a href="https://www.dicoding.com/certificates/1OP867L71XQK" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          28 July 2022 - 28 July 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Pengenalan ke Logika Pemrograman (Programming Logic 101)
                          <a href="https://www.dicoding.com/certificates/RVZK603N4ZD5" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          26 July 2022 - 26 July 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Meniti Karier sebagai Software Developer
                          <a href="https://www.dicoding.com/certificates/MEPJE98EJX3V" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          8 July 2022 - 8 July 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Belajar Dasar UX Design
                          <a href="https://www.dicoding.com/certificates/KEXLG11QWZG2" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          29 June 2022 - 29 June 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Belajar Pengembangan Aplikasi Android Intermediate
                          <a href="https://www.dicoding.com/certificates/1RXYM1G8QXVM" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          26 June 2022 - 26 June 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Belajar Fundamental Aplikasi Android
                          <a href="https://www.dicoding.com/certificates/81P2GQQ7JPOY" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          6 April 2022 - 6 April 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Belajar Dasar Git dengan GitHub
                          <a href="https://www.dicoding.com/certificates/6RPN8ME84Z2M" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          3 April 2022 - 3 April 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Belajar Prinsip Pemrograman SOLID
                          <a href="https://www.dicoding.com/certificates/JLX13N6Y2P72" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          3 April 2022 - 3 April 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                      <div className="content-list mb-3">
                        <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                          Memulai Pemrograman Dengan Kotlin
                          <a href="https://www.dicoding.com/certificates/GRX5K6W6YZ0M" target="_blank" rel="noopener noreferrer">
                            <OuterSmallIcon>
                              <Image src="img/icons/linkchain-icon.svg"></Image>
                            </OuterSmallIcon>
                          </a>
                        </h3>
                        <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                          <Image src="img/icons/calendar-icon.svg"></Image>
                          23 February 2022 - 23 February 2025
                        </div>
                        <p className="list-place mt-2">At Dicoding Academy</p>
                      </div>
                    </div>
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

export default Experiences;