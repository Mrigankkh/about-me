import React from "react";
import GalleryCard from "./GalleryCard";
import Card from "react-bootstrap/Card";
const CountryCard = ({ country }) => {
  return (
    <Card className="travel-card-view" style={{ margin: "50px" }}>
      <Card.Body>
        <div>
          <h2 className=" travel-heading">{country.name}</h2>
          <GalleryCard images={country.images} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
