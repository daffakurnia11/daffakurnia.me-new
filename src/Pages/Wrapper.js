import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../Components/Background";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "../Components/Menu";

export default function Wrapper() {
  return (
    <>
      <Background />
      <Container>
        <Row>
          <Col lg={{ span: 4, order: "last" }} xxl="3">
            <Menu />
          </Col>
          <Col lg={{ span: 8, order: "first" }} xxl="9">
            <div id="content">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
