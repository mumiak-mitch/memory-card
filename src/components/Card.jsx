import React from 'react';

const Card = ({ cardData }) => {
    return (
        <div className="card">
            <img src={cardData.image} alt={cardData.name} />
            <p>{cardData.text}</p>
        </div>
    );
}

export default Card;