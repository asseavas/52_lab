import Card from "./Card.ts";

interface Cards {
  getCard(): Card;
  getCards(howMany: number): Card[];
}


class CardDeck implements Cards {
  public cards: Card[];

  constructor() {
    const suits = ['diams', 'hearts', 'clubs', 'spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    this.cards = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  getCard(): Card {
    const index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const drawnCards: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      if (this.cards.length === 0) {
        throw new Error("Not enough cards in the deck");
      }
      drawnCards.push(this.getCard());
    }
    return drawnCards;
  }
}

export default CardDeck;