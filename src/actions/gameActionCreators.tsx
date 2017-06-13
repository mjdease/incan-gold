import * as ACTIONS from '../constants/actionConstants';

export interface NewGame {
  type: ACTIONS.NEW_GAME;
  currentRound: number;
}

export interface EndGame {
  type: ACTIONS.END_GAME;
}

export type GameAction = NewGame | EndGame;

export type newGame = (currentRound: number) => NewGame;
export let newGame: newGame = function(currentRound: number): NewGame {
  return {
    type: ACTIONS.NEW_GAME,
    currentRound,
  };
};

export function endGame(): EndGame {
  return {
    type: ACTIONS.END_GAME,
  };
}