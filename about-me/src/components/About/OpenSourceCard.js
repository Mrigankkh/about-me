import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function OpenSourceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I've recently started contributing to open source projects and have
            found it to be a rewarding experience. I enjoy{" "}
            <span className="purple"> collaborating </span>with other developers
            and learning from their code. I believe that open source is a great
            way to give back to the community and improve my skills.
            <br />
            <br />I am currently working on Google's open source
            <span className="purple"> metrax </span>
            repository.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default OpenSourceCard;
