import React from "react";
import PictureCard from "./PictureCard";

const GalleryCard = ({ images }) => {
  return (
    <div className="gallery flex" style={{ margin: "10px", padding: "10px" }}>
      {images.map((image, index) => (
        <PictureCard image={image} />
      ))}
    </div>
  );
};

export default GalleryCard;
