import React, { useState, useEffect } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import { fetchData } from './services/apiService';

const MainGame = () => {
    const [cards, setCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const data = await fetchData(); // Fetch data from API
            setCards(data.results); // Assuming PokeAPI response has a 'results' property containing an array of Pokemon
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };

    const handleClick = (id) => {
        if (clickedCards.includes(id)) {
            // Reset game if card is clicked twice
            resetGame();
        } else {
            // Increment score and update clicked cards
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            setClickedCards([...clickedCards, id]);
            // Update best score if current score is higher
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
            // Shuffle cards
            shuffleCards();
        }
    };

    const resetGame = () => {
        setCurrentScore(0);
        setClickedCards([]);
        shuffleCards();
    };

    const shuffleCards = () => {
        // Shuffle cards randomly
        const shuffled = cards.sort(() => Math.random() - 0.5);
        setCards([...shuffled]);
    };

    return (
        <div className="main-game">
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} cardData={card} onClick={() => handleClick(card.id)} />
                ))}
            </div>
        </div>
    );
};

export default MainGame;