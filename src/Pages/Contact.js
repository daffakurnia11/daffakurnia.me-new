import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { InnerOuterBox } from "../Components/Box";
import Menu from "../Components/Menu";
import { ShortDivider } from "../Components/Divider";
import { InnerBigIcon, InnerIcon, OuterFull } from "../Components/Button";

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3135248718004!2d112.72413259578211!3d-7.430515476090344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6a9ae036dff%3A0x818813d8801ac86!2sJl.%20Utama%20Gading%20Fajar%201%2C%20Siwalan%20Panji%2C%20Siwalanpanji%2C%20Kec.%20Buduran%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061252!5e0!3m2!1sen!2sid!4v1658898415980!5m2!1sen!2sid" height="300" style="border:0; width: 100%; border-radius: 12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
}

function About() {
  useEffect(() => {
    document.title = 'Contacts | Daffa Kurnia Fatah'
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={{ span: 4, order: 'last' }} xxl="3">
          <Menu />
        </Col>
        <Col lg={{ span: 8, order: 'first' }} xxl="9">
          <div id="content">
            <InnerOuterBox>
              <div className="contacts">
                <h2 className="section-title">Location</h2>
                <ShortDivider />
                <InnerOuterBox>
                  <div className="location-content p-1">
                    <Iframe iframe={iframe} />
                  </div>
                </InnerOuterBox>
                <h2 className="section-title mt-4">My Contact</h2>
                <ShortDivider />
                <div className="address">
                  <InnerOuterBox>
                    <div className="address-box d-flex justify-content-center align-items-center">
                      <h3 className="address-content text-center">
                        Gading Fajar 1 Buduran, Sidoarjo<br />
                        East Java, Indonesia - 61252
                      </h3>
                    </div>
                  </InnerOuterBox>
                  <div className="address-icon">
                    <InnerBigIcon>
                      <Image src="img/icons/location-big-icon.svg"></Image>
                    </InnerBigIcon>
                  </div>
                </div>
                <Row className="contact justify-content-center">
                  <Col xxl='4' sm='6' className="mb-3">
                    <div className="d-flex flex-column gap-3 align-items-center">
                      <InnerIcon>
                        <Image src="img/icons/mail-icon.svg"></Image>
                      </InnerIcon>
                      <a href="mailto:daffakurniaf11@gmail.com" target="_blank" rel="noopener noreferrer" className="d-block w-100 px-2">
                        <OuterFull>
                          <p className="contact-text text-center">daffakurniaf11@gmail.com</p>
                        </OuterFull>
                      </a>
                    </div>
                  </Col>
                  <Col xxl='4' sm='6' className="mb-3">
                    <div className="d-flex flex-column gap-3 align-items-center">
                      <InnerIcon>
                        <Image src="img/icons/linkedin-icon.svg"></Image>
                      </InnerIcon>
                      <a href="https://www.linkedin.com/in/daffakurniafatah/" target="_blank" rel="noopener noreferrer" className="d-block w-100 px-2">
                        <OuterFull>
                          <p className="contact-text text-center">Daffa Kurnia Fatah</p>
                        </OuterFull>
                      </a>
                    </div>
                  </Col>
                  <Col xxl='4' sm='6' className="mb-3">
                    <div className="d-flex flex-column gap-3 align-items-center">
                      <InnerIcon>
                        <Image src="img/icons/phone-icon.svg"></Image>
                      </InnerIcon>
                      <a href="https://wa.me/6285156317473" target="_blank" rel="noopener noreferrer" className="d-block w-100 px-2">
                        <OuterFull>
                          <p className="contact-text text-center">+62 851 5631 7473</p>
                        </OuterFull>
                      </a>
                    </div>
                  </Col>
                </Row>
                <h2 className="section-title mt-4">Social Media</h2>
                <ShortDivider />
                <Row className="justify-content-center mt-4">
                  <Col xxl='3' xl='4' sm='6' className="mb-3">
                    <a href="http://line.me/ti/p/~daffakurnia11" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                      <OuterFull>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <Image src="img/icons/line-icon.svg"></Image>
                          <span className="socials-text">daffakurnia11</span>
                        </div>
                      </OuterFull>
                    </a>
                  </Col>
                  <Col xxl='3' xl='4' sm='6' className="mb-3">
                    <a href="https://wa.me/6285156317473" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                      <OuterFull>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <Image src="img/icons/whatsapp-icon.svg"></Image>
                          <span className="socials-text">+62 851 5631 7473</span>
                        </div>
                      </OuterFull>
                    </a>
                  </Col>
                  <Col xxl='3' xl='4' sm='6' className="mb-3">
                    <a href="https://www.instagram.com/daffakurniaf11/" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                      <OuterFull>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <Image src="img/icons/instagram-icon.svg"></Image>
                          <span className="socials-text">@daffakurniaf11</span>
                        </div>
                      </OuterFull>
                    </a>
                  </Col>
                  <Col xxl='3' xl='4' sm='6' className="mb-3">
                    <a href="https://github.com/daffakurnia11" target="_blank" rel="noopener noreferrer" className="w-100 d-block">
                      <OuterFull>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <Image src="img/icons/github-icon.svg"></Image>
                          <span className="socials-text">daffakurnia11</span>
                        </div>
                      </OuterFull>
                    </a>
                  </Col>
                </Row>
              </div>
            </InnerOuterBox>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;