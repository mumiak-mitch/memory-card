import React from 'react';

const Scoreboard = ({ currentScore, bestScore }) => {
    return (
        <div className="scoreboard">
            <div>Current Score: {currentScore}</div>
            <div>Best Score: {bestScore}</div>
        </div>
    );
}

export default Scoreboard;