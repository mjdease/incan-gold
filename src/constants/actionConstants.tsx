
export namespace type {
  export const NEW_GAME = 'NEW_GAME';
  export const END_GAME = 'END_GAME';

  export type NEW_GAME = typeof NEW_GAME;
  export type END_GAME = typeof END_GAME;
}

export interface NewGame {
  type: type.NEW_GAME;
  currentRoundIndex: number;
  artifactsCollected: number;
  hazardsDiscarded: ig.hazardCount;
}

export interface EndGame {
  type: type.END_GAME;
}

export type GameAction = NewGame | EndGame;

