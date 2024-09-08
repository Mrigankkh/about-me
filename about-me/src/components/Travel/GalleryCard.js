import React from 'react';
import PictureCard from './PictureCard';

const GalleryCard = ({ pictures }) => {
    return (
        <div className="gallery">
            {pictures?.map((picture, index) => (
                <PictureCard key={index} picture={picture} />
            ))}
        </div>
    );
};

export default GalleryCard;