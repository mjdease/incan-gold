import * as Actions from '../constants/actionConstants';
import { GameState } from '../types/game';

export default function(state: GameState | undefined, action: Actions.GameAction): GameState {
  switch (action.type) {
    case Actions.type.NEW_GAME:
      console.log('new game action:', action);
      return {
        currentRoundIndex: action.currentRoundIndex,
      };
    case Actions.type.END_GAME:
      return {};
    default:
      return state || {};
  }
}