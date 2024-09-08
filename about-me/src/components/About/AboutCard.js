import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            I live in <span className="purple"> Boston, Massachusetts </span>
            where I am pursuing my Masters Degree in Computer Science at Northeastern University.
            <br />
    
            <br />
I love travelling and I am always down for a hastily planned weekend getaway.

          </p>
       
          <p style={{ color: "rgb(155 126 172)" }}>
            "Do one thing every day that scares you."{" "}
          </p>
          <footer className="blockquote-footer">Eleanor Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
