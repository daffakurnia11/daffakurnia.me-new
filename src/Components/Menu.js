import { Image } from "react-bootstrap";
import { InnerFull, OuterFull } from "./Button";
import { InnerOuterBox, InnerOuterCircle } from "./Box";
import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div id="menu">
      <InnerOuterBox>
        <div className="menu">
          <div className="menu-profile mb-3 d-none d-lg-block">
            <InnerOuterCircle>
              <div className="d-flex p-1">
                <Image src="img/profile.jpg" roundedCircle fluid></Image>
              </div>
            </InnerOuterCircle>
          </div>
          <h2 className="menu-fullname text-center">Daffa Kurnia Fatah</h2>
          <p className="menu-jobs text-center">Software Developer</p>
          <ul className="menu-list mt-3 text-center d-flex flex-row flex-wrap justify-content-center flex-lg-column">
            <li className="mb-3 mx-2 mx-lg-0">
              {props.children === 'Home' ? (
                <InnerFull>Home</InnerFull>
              ) : (
                <Link to="/">
                  <OuterFull>Home</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {props.children === 'About' ? (
                <InnerFull>About</InnerFull>
              ) : (
                <Link to="/about">
                  <OuterFull>About</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {props.children === 'Experiences' ? (
                <InnerFull>Experiences</InnerFull>
              ) : (
                <Link to="/experiences">
                  <OuterFull>Experiences</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {props.children === 'Projects' ? (
                <InnerFull>Projects</InnerFull>
              ) : (
                <Link to="/projects">
                  <OuterFull>Projects</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {props.children === 'Contact' ? (
                <InnerFull>Contact</InnerFull>
              ) : (
                <Link to="/contact">
                  <OuterFull>Contact</OuterFull>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </InnerOuterBox>
    </div>
  );
}