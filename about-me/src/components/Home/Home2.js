import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mrigank_picture.jpeg";
import Tilt from "react-parallax-tilt";
import Github from "./Github";
import Techstack from "./Techstack";
import Experience from "./experience";
import experiences from "../../constants/experience";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span> 
            </h1>
            <p className="home-about-body">
              I am an aspiring <b className="purple"> Software Developer</b>,  currently pursuing my Masters degree in Computer Science at Northeastern University.
              <br />
              <br />Having acquired a strong foundation in algorithms and data structures, my time at Northeastern has been dedicated to honing practical coding skills and solving real world problems.
              <br />
              <br />
           
              I thrive on collaborative problem-solving and embrace the challenges of real-world software engineering. Whether it’s hacking away at a group project or brainstorming the next disruptive tech idea, I’m always geared up for a coding adventure!
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
                <br />
              <br />
                 I'm passionate about writing code, &nbsp;
              <i>
                <b className="purple">developing software </b>. I have also devled into the realm of
                {" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/>
        <br/>
        <blockquote className="blockquote mb-0">
      
          <p style={{ color: "white" }}>
            <i> "ANY FOOL CAN WRITE
CODE THAT A COMPUTER CAN UNDERSTAND. GOOD PROGRAMMERS WRITE
CODE THAT HUMANS CAN
UNDERSTAND."</i>
         {" "}
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
        <Container fluid className="about-section-2">
        <Experience/>
        </Container>
    
        <Container fluid className="about-section-2">
       <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        {/* <Github /> */}
       </Container>
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
                 href="khandelwal.mr@northeastern.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://linkedin.com/in/mrigank-khandelwal-484b0a193/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  //href="https://www.instagram.com/soumyajit4419"
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
    </Container>
  );
}
export default Home2;
