import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../assets/Projects/codeEditor.png";
import IME from "../../assets/Projects/IME.png";
import ASL from "../../assets/Projects/ASL.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IME}
              isBlog={false}
              title="IME: Image Manipulation and Enhancement"
              description="A Desktop image processing application in Java with a text- based and a GUI interface.  As per the Academic Integrity Policy of the University, the source code can be made public only upon request. The JAR file is pubically available."
              ghLink="https://github.com/Mrigankkh/Image-Manipulation-and-Enhancement"
           //   demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASL}
              isBlog={false}
              title="ASL-2-Sentence"
              description="This project aims to integrate Computer Vision and Natural Language Processing to classify images of ASL hand signs to their respective characters and to generate meaningful sentences from the keywords signed.  "
              ghLink="https://github.com/Mrigankkh/ASL-2-Text"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Descriptive Evaluation"
              description="Built a tool in Python for Descriptive Answer Evaluation of subjective answers in semester0end evaluations. Various NLP techniques were compared including BERT and word embeddings to find semantic similarity between Student answers and the answer key."
              ghLink="https://github.com/Mrigankkh/DescriptiveEval"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="UniSphere"
              description="An android application for a social media platform for univerity students to connect and share. Developed using Java with Firebase. "
              ghLink="https://github.com/Mrigankkh"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          */}
        </Row>
      </Container>
    </Container> 
  );
}

export default Projects;
