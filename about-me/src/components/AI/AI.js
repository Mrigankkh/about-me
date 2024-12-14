import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AILoadingGIF from '../../assets/AI/AILoading.gif'
import Particle from '../Particle'; 
import { Row } from 'react-bootstrap';
import Landing from './Landing';
import Chat from './Chat/Chat';
const AI = () => {
    return (
        <Container className="fluid ai-section">
            <Particle />
            <Container>
        
                <Row style={{ margin: "auto", paddingBottom: "10px" }}>
                <Chat/>
                </Row>
                <Row>
                <img src={AILoadingGIF} alt="GIF" />

                </Row>
 
            </Container>
      

        </Container>
      
    );
};

export default AI;