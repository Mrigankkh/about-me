import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import myImg from "../../assets/Home/Mrigank_picture.jpeg";
import Aboutcard from "./AboutCard";
import CodeForBostonLogo from "../../assets/About/cfb-logo-stacked-dark.png";
import VolunteerCard from "./VolunteerCard";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={myImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ justifyContent: "center", padding: "50px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={CodeForBostonLogo} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Volunteer <strong className="purple">Work</strong>
            </h1>
            <VolunteerCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
