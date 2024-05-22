import { ICard } from "../App.tsx";

class PokerHand {
  private cards: ICard[];

  constructor(cards: ICard[]) {
    this.cards = cards;
  }

  private getRanks(): string[] {
    return this.cards.map(card => card.rank);
  }

  private getSuits(): string[] {
    return this.cards.map(card => card.suit);
  }

  private countOccurrences(arr: string[]): { [key: string]: number } {
    return arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }

  getOutcome(): string {
    const ranks = this.getRanks();
    const suits = this.getSuits();
    const rankCounts = this.countOccurrences(ranks);
    const suitCounts = this.countOccurrences(suits);

    const isFlush = Object.values(suitCounts).some(count => count === 5);
    const rankValues = Object.values(rankCounts);
    const isThreeOfAKind = rankValues.some(count => count === 3);
    const isTwoPair = rankValues.filter(count => count === 2).length === 2;
    const isOnePair = rankValues.some(count => count === 2);

    if (isFlush) return 'Flush';
    if (isThreeOfAKind) return 'Three of a Kind';
    if (isTwoPair) return 'Two Pairs';
    if (isOnePair) return 'One Pair';
    return 'High Card';
  }
}

export default PokerHand;
