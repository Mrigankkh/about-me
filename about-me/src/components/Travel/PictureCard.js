import React from 'react';

const PictureCard = ({ imageUrl, description }) => {
    return (
        <div className="picture-card">
            <img src={imageUrl} alt="Picture" className="picture-card__image" />
            <p className="picture-card__description">{description}</p>
        </div>
    );
};

export default PictureCard;