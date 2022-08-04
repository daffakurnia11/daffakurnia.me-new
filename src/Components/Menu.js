import { Image } from "react-bootstrap";
import { InnerFull, OuterFull } from "./Button";
import { InnerOuterBox, InnerOuterCircle } from "./Box";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

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
              {location.pathname === '/' ? (
                <InnerFull>Home</InnerFull>
              ) : (
                <Link to="/">
                  <OuterFull>Home</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {location.pathname === '/about' ? (
                <InnerFull>About</InnerFull>
              ) : (
                <Link to="/about">
                  <OuterFull>About</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {location.pathname === '/experiences' ? (
                <InnerFull>Experiences</InnerFull>
              ) : (
                <Link to="/experiences">
                  <OuterFull>Experiences</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {location.pathname === '/projects' ? (
                <InnerFull>Projects</InnerFull>
              ) : (
                <Link to="/projects">
                  <OuterFull>Projects</OuterFull>
                </Link>
              )}
            </li>
            <li className="mb-3 mx-2 mx-lg-0">
              {location.pathname === '/contact' ? (
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