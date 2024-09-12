import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/Home/Mrigank_picture.jpeg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am a Computer Science graduate student at Northeastern
              University. I am currently working at Dell Technologies as an{" "}
              <b className="purple">AI Software Engineer Co-op</b>.
              <br />
              <br /> I am a full-stack developer. I find{" "}
              <b className="purple">Generative AI</b> really intriguing and I
              work closely with Open-Source Generative AI models and frameworks.
              <br />
              <br />
              Throughout my academic and professional journey, I have worked on
              various projects and have gained experience in different domains
              like{" "}
              <b className="purple">
                {" "}
                Web & Mobile Development, Machine Learning & AI, and Cloud
                Computing
              </b>
              . <br />
              <br /> <b className="purple">Fun fact: </b>I did an exploratory
              research on Quantum Computing for my undergrauate project!
              <br />
              <br />
              I thrive on collaborative problem-solving and embrace the
              challenges of real-world software engineering. Whether it’s
              hacking away at a group project or brainstorming the next
              disruptive tech idea, I’m always geared up for a coding adventure!
              <br />
              <br />{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br />
        <br />
        <blockquote className="blockquote mb-0">
          <p style={{ color: "white" }}>
            <i>
              {" "}
              "ANY FOOL CAN WRITE CODE THAT A COMPUTER CAN UNDERSTAND. GOOD
              PROGRAMMERS WRITE CODE THAT HUMANS CAN UNDERSTAND."
            </i>{" "}
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Container>
    </Container>
  );
}
export default About;
