import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogCard({ title, imgPath, description, blogLink }) {
  return (
    <Card className="blog-card-view">
      {" "}
      <Card.Img variant="top" src={imgPath} alt="blog-img" />{" "}
      <Card.Body>
        {" "}
        <Card.Title>{title}</Card.Title>{" "}
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>{" "}
      </Card.Body>{" "}
      <Card.Footer>
        {" "}
        <Button variant="primary" href={blogLink} target="_blank">
          {" "}
          Read Blog{" "}
        </Button>{" "}
      </Card.Footer>{" "}
    </Card>
  );
}

export default BlogCard;
