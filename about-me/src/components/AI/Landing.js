import React from 'react';

const Landing = () => {
    const handleClick = () => {
        console.log('Game Started');
    };

    return (
        <div>
            <button onClick={handleClick}>Start Game</button>
        </div>
    );
};

export default Landing;