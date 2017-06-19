import { connect } from 'react-redux';
import * as ig from '../types/index';
import * as GameActions from '../actions/gameActionCreators';

import TrackerGameView from '../components/TrackerGameView/TrackerGameView';

function mapStateToProps({ game }: ig.StoreState) {
  return {
    game,
  };
}

// function mapDispatchToProps(dispatch: Dispatch<GameActions.GameAction>) {
//   return {
//     newGame: (currentRoundIndex: number) => dispatch(GameActions.newGame(currentRoundIndex)),
//   };
// }

export default connect(
  mapStateToProps,
  { endGame: GameActions.endGameActionCreator }
)(TrackerGameView);