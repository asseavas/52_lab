import { useState } from "react";
import Card from "./components/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import PokerHand from "./lib/PokerHand.ts";
import './App.css';

export interface ICard {
  rank: string;
  suit: string;
}

const App = () => {
  const [deck] = useState<CardDeck>(new CardDeck());
  const [cards, setCards] = useState<ICard[]>([]);
  const [outcome, setOutcome] = useState<string>("");

  const cardCopy = () => {
    const remainingCards = deck.getCardCount();
    if (remainingCards > 0) {
      const drawCount = remainingCards >= 5 ? 5 : remainingCards;
      const drawnCards = deck.getCards(drawCount);
      setCards(drawnCards);

      const pokerHand = new PokerHand(drawnCards);
      setOutcome(pokerHand.getOutcome());
    }
  };

  return (
    <>
      {deck.getCardCount() === 0 && cards.length === 0 ? (
        <div>Карты закончились</div>
      ) : (
        <>
          <div className="playingCards faceImages">
            {cards.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit}/>
            ))}
          </div>
          {outcome && <div className="resultText">Результат: {outcome}</div>}
          {deck.getCardCount() > 0 && (
            <button className="btn" onClick={cardCopy}>Раздать карты</button>
          )}
        </>
      )}
    </>
  );
};

export default App;

