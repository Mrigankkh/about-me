import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container } from "react-bootstrap";
const Connect = () => {

  return (
    <Container className="about-section-2">
      <Row>
          <Col md={12} className="home-about-social">
            <h1>Lets Talk.</h1>
            <p>
               I would love to get to <span className="purple">know </span>you
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mrigankkh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="mailto:khandelwal.mr@northeastern.edu?"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://linkedin.com/in/mrigank-khandelwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
};

export default Connect;
