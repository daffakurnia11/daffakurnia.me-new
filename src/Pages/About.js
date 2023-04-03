import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { ShortDivider } from "../Components/Divider";
import { OuterIcon } from "../Components/Button";
import { InnerOuterBox } from "../Components/Box";
import DataAos from "../Components/DataAos";

function About() {
  useEffect(() => {
    document.title = "About | Daffa Kurnia Fatah";
  }, []);

  return (
    <DataAos>
      <InnerOuterBox>
        <div className="about">
          <h2 className="about-section">About</h2>
          <ShortDivider />
          <h1 className="about-title mt-3">Daffa Kurnia Fatah</h1>
          <p className="about-jobs">Software Developer</p>
          <p className="about-content mt-4">
            Hello! My name is{" "}
            <span className="content-highlight">Daffa Kurnia Fatah</span> and
            also called <span className="content-highlight">Daffa</span>. I
            started learning web development in{" "}
            <span className="content-highlight">April 2020</span>, which is the
            start of a{" "}
            <span className="content-highlight">pandemic Covid-19</span>. I
            decided to learn web development from my course named{" "}
            <span className="content-highlight">Computer Programming</span>{" "}
            where I made my first website for my final project. I started
            learning from{" "}
            <span className="content-highlight">Youtube Channel</span> to
            explore more about web development.
          </p>
          <p className="about-content mt-4">
            Some practice and study made me challenged to learn and explore more
            about web development until I had been a{" "}
            <span className="content-highlight">
              staff of Ini Lho ITS! 2021
            </span>
            . Some experiences have also helped me in developing my web
            development skills so that I can hone my{" "}
            <span className="content-highlight">problem solving</span> and{" "}
            <span className="content-highlight">critical thinking</span> until I
            learn about{" "}
            <span className="content-highlight">Mobile Development</span>{" "}
            especially using <span className="content-highlight">Kotlin</span>{" "}
            language while I join{" "}
            <span className="content-highlight">Bangkit Academy 2022</span>{" "}
            program.
          </p>
          <p className="about-content mt-4">
            <span className="content-highlight">
              Learning and creating something new
            </span>{" "}
            are very challenging for me. Until now, I enjoy{" "}
            <span className="content-highlight">improving my knowledge</span>{" "}
            and{" "}
            <span className="content-highlight">
              exploring new technologies
            </span>{" "}
            in software development. I want to{" "}
            <span className="content-highlight">apply and share it</span> along
            the way because <span className="content-highlight">sharing</span>{" "}
            also helps me in{" "}
            <span className="content-highlight">mastering and evaluating</span>{" "}
            the knowledge I have.
          </p>
          <p className="about-content mt-4">
            <span className="content-highlight">
              Feel free to contact me and I will be very pleasure to help!
            </span>
          </p>
          <div className="my-4 d-flex flex-wrap gap-3">
            <a
              href="http://line.me/ti/p/~daffakurnia11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OuterIcon>
                <Image src="img/icons/line-icon.svg"></Image>
              </OuterIcon>
            </a>
            <a
              href="https://wa.me/6285156317473"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OuterIcon>
                <Image src="img/icons/whatsapp-icon.svg"></Image>
              </OuterIcon>
            </a>
            <a
              href="https://www.instagram.com/daffakurniaf11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OuterIcon>
                <Image src="img/icons/instagram-icon.svg"></Image>
              </OuterIcon>
            </a>
            <a
              href="mailto:daffakurniaf11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OuterIcon>
                <Image src="img/icons/mail-icon.svg"></Image>
              </OuterIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/daffakurniafatah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OuterIcon>
                <Image src="img/icons/linkedin-icon.svg"></Image>
              </OuterIcon>
            </a>
          </div>
        </div>
      </InnerOuterBox>
    </DataAos>
  );
}

export default About;
