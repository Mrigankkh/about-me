import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function VolunteerCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            I volunteer at <span className="purple"> Code for Boston</span>, a civic tech volunteer group that addresses local social and civic challenges through creative uses of software and  technology.
        
            <br />
    
            <br />
Currently, I am contributing to the <span className="purple"> MAPLE </span>(Massachusetts Platform for Legislative Engagement) project, a platform that enables people to post their testemonies about Massachusetts bills. 
<br />
<a href="https://www.mapletestimony.org/">Maple Website</a>
<br/>
<br/>
To know more about Code for Boston, head over to their <a href="https://www.codeforboston.org/">website</a>.
          </p>
       

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default VolunteerCard;
