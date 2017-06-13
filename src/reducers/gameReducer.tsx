import * as ACTIONS from '../constants/actionConstants';
import { GameAction } from '../actions/gameActionCreators';
import { GameState } from '../types/game';

export default function(state: GameState | undefined, action: GameAction): GameState {
  switch (action.type) {
    case ACTIONS.NEW_GAME:
      return {
        currentRoundIndex: action.currentRound,
      };
    case ACTIONS.END_GAME:
      return {};
    default:
      return state || {};
  }
}