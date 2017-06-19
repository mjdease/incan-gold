import * as Actions from '../constants/actionConstants';

export function newGameActionCreator(
  currentRoundIndex: number,
  artifactsCollected: number,
  hazardsDiscarded: ig.hazardCount
): Actions.NewGame {
  return {
    type: Actions.type.NEW_GAME,
    currentRoundIndex,
    artifactsCollected,
    hazardsDiscarded,
  };
}
export type newGameActionCreator = typeof newGameActionCreator;

export function endGameActionCreator(): Actions.EndGame {
  return {
    type: Actions.type.END_GAME,
  };
}
export type endGameActionCreator = typeof endGameActionCreator;