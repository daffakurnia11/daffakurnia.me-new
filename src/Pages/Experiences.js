import React, { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { ShortDivider } from "../Components/Divider";
import { OuterFull, OuterIcon, OuterSmallIcon } from "../Components/Button";
import { InnerOuterBox } from "../Components/Box";
import DataAos from "../Components/DataAos";

import skills from "../Data/skills.json";
import experiences from "../Data/experiences.json";

function Experiences() {
  useEffect(() => {
    document.title = "Skills & Experiences | Daffa Kurnia Fatah";
  }, []);

  return (
    <DataAos>
      <InnerOuterBox>
        <div className="experiences">
          <div className="skills">
            <h2 className="skills-section">Professional Skills</h2>
            <ShortDivider />
            <Row className="mt-4 justify-content-center">
              {skills.map(function (skill) {
                return (
                  <>
                    <Col xl="3" md="4" sm="6" className="mb-3">
                      <OuterFull>
                        <div className="skills-list d-flex gap-2 align-items-center justify-content-center">
                          <Image src={"img/icons/" + skill.icons}></Image>
                          {skill.skills}
                        </div>
                      </OuterFull>
                    </Col>
                  </>
                );
              })}
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
                {experiences.map(function (data) {
                  if (data.type === "Experience") {
                    return (
                      <>
                        <div className="content-list mb-3">
                          <h3 className="list-title mb-1">{data.title}</h3>
                          <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                            <Image src="img/icons/calendar-icon.svg"></Image>
                            {data.date.start} -{" "}
                            {data.date.ended ?? (
                              <span className="present-highlight">Present</span>
                            )}
                          </div>
                          <p className="list-place mt-2">{data.description}</p>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
            <div className="competition mt-3">
              <OuterIcon>
                <Image src="img/icons/competition-icon.svg"></Image>
              </OuterIcon>
              <div className="section-content pt-2">
                {experiences.map(function (data) {
                  if (data.type === "Competence") {
                    return (
                      <>
                        <div className="content-list mb-3">
                          <h3 className="list-title mb-1">{data.title}</h3>
                          <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                            <Image src="img/icons/calendar-icon.svg"></Image>
                            {data.date.start}
                            {data.date.ended ? " - " + data.date.ended : ""}
                          </div>
                          <p className="list-place mt-2">
                            By Bangkit Academy 2022 supported by Google, GoTo,
                            Traveloka, and Dicoding Academy
                          </p>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
            <div className="certification mt-3">
              <OuterIcon>
                <Image src="img/icons/certificate-icon.svg"></Image>
              </OuterIcon>
              <div className="section-content pt-2">
                {experiences.map(function (data) {
                  if (data.type === "Certification") {
                    return (
                      <>
                        <div className="content-list mb-3">
                          <h3 className="list-title mb-1 d-flex gap-2 align-items-center">
                            {data.title}
                            <a
                              href={data.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OuterSmallIcon>
                                <Image src="img/icons/linkchain-icon.svg"></Image>
                              </OuterSmallIcon>
                            </a>
                          </h3>
                          <div className="list-date gap-2 d-flex align-items-center justify-content-start">
                            <Image src="img/icons/calendar-icon.svg"></Image>
                            {data.date.start} - {data.date.ended}
                          </div>
                          <p className="list-place mt-2">{data.description}</p>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </InnerOuterBox>
    </DataAos>
  );
}

export default Experiences;
