import React from 'react';
import GalleryCard from './GalleryCard';

const CountryCard = ({ country }) => {
    return (
        <div>
            <h2 className=' travel-heading'>{country.name}</h2>
            <GalleryCard/>
        </div>
    );
};

export default CountryCard;