export interface GameState {
  currentRoundIndex?: number;
  discardedHazards?: HazardCard[];
  artifacts?: {
    active: ArtifactCard[];
    collected: ArtifactCard[];
  };
  rounds?: Round[];
}

export interface Round {
  isComplete: boolean;
  deck: Deck;
  turns: Turn[];
}

export interface Turn {
  card: Card;
}

export interface Deck {
  cards: Card[];
}

export interface Card {

}

export interface TreasureCard extends Card {

}

export interface HazardCard extends Card {

}

export interface ArtifactCard extends Card {

}