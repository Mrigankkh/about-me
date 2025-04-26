import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BLOGS from "../../constants/Blogs";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <Container fluid className="project-section">
      {" "}
      <Particle />{" "}
      <Container>
        {" "}
        <h1 className="project-heading">
          {" "}
          My Recent <strong className="purple">Blogs</strong>{" "}
        </h1>{" "}
        <p style={{ color: "white" }}>
          {" "}
          Here are a few posts I've written recently.{" "}
        </p>{" "}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {" "}
          {BLOGS.map((blog, index) => (
            <Col md={4} className="blog-card" key={index}>
              {" "}
              <BlogCard
                title={blog.title}
                imgPath={blog.imgPath}
                description={blog.description}
                blogLink={blog.blogLink}
              />{" "}
            </Col>
          ))}{" "}
        </Row>{" "}
      </Container>{" "}
    </Container>
  );
}

export default Blogs;
