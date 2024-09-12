import React from "react";
import { Container } from "react-bootstrap";
const PictureCard = ({ image }) => {
  return (
    <Container
      className="picture-card"
      style={{ overflow: "hidden", marginBottom: "50px" }}
    >
      <img
        src={image.url}
        alt="Picture"
        style={{
          objectFit: "contain",
          maxHeight: "700px",
          maxWidth: "1000px",
          height: "100%",
          width: "100%",
          padding: "10px",
        }}
      />
      <h4 className="picture-card__title">{image.title}</h4>
      <p className="picture-card__description">{image.description}</p>
    </Container>
  );
};

export default PictureCard;
