import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OuterFit, OuterIcon } from "../Components/Button";
import { LongDivider } from "../Components/Divider";

function Home() {
  useEffect(() => {
    document.title = 'Home | Daffa Kurnia Fatah'
  }, []);

  return (
    <div className="home text-center">
      <h1 className="home-title">Daffa Kurnia Fatah</h1>
      <div className="d-flex gap-5 mt-3 mb-4 justify-content-center">
        <a href="mailto:daffakurniaf11@gmail.com" target="_blank" rel="noopener noreferrer">
          <OuterIcon>
            <Image src="img/icons/mail-icon.svg"></Image>
          </OuterIcon>
        </a>
        <a href="https://github.com/daffakurnia11" target="_blank" rel="noopener noreferrer">
          <OuterIcon>
            <Image src="img/icons/github-icon.svg"></Image>
          </OuterIcon>
        </a>
        <a href="https://www.linkedin.com/in/daffakurniafatah/" target="_blank" rel="noopener noreferrer">
          <OuterIcon>
            <Image src="img/icons/linkedin-icon.svg"></Image>
          </OuterIcon>
        </a>
      </div>
      <p className="home-desc mb-1">
        Hi! I am <span className="desc-highlight">Daffa Kurnia Fatah</span> you can call me <span className="desc-highlight">Daffa</span>
      </p>
      <p className="home-desc mb-1">
        As a <span className="desc-highlight">software developer</span> experienced with <span className="desc-highlight">Laravel</span>, <span className="desc-highlight">React</span>, and <span className="desc-highlight">Kotlin</span>
      </p>
      <LongDivider />
      <div className="home-button d-flex flex-column flex-sm-row align-items-center justify-content-between">
        <Link to="/about" className="mb-3">
          <OuterFit>See more about me</OuterFit>
        </Link>
        <Link to="/contact" className="mb-3">
          <OuterFit>Contact me</OuterFit>
        </Link>
      </div>
    </div>
  )
}

export default Home;