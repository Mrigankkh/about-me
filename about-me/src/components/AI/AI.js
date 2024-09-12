import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AILoadingGIF from '../../assets/AI/AILoading.gif'
import Particle from '../Particle'; 
import { Row } from 'react-bootstrap';
const AI = () => {
    return (
        <Container className="fluid ai-section">
            <Particle />
            <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>

            <h1 className="project-heading">
          Coming <strong className="purple">Soon </strong>
        </h1>
        

            <img src={AILoadingGIF} alt="GIF" />
                </Row>
        
            </Container>
      

        </Container>
      
    );
};

export default AI;