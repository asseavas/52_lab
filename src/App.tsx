import { useState } from "react";
import Card from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import './App.css';

interface ICard {
  rank: string;
  suit: string;
}

const App = () => {
  const [deck] = useState<CardDeck>(new CardDeck());
  const [cards, setCards] = useState<ICard[]>([]);

  const cardCopy = () => {
    if (deck.getCardCount() > 0) {
      const drawnCards = deck.getCards(5);
      setCards(drawnCards);
    }
  };

  return (
    <>
      {deck.getCardCount() === 0 ? (
        <div>Карты закончились</div>
      ) : (
        <>
          <div className="playingCards faceImages">
            {cards.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit}/>
            ))}
          </div>
          <button className="btn" onClick={cardCopy}>Раздать карты</button>
        </>
      )}
    </>
  );
};

export default App;

