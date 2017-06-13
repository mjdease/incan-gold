import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps, Route, Switch } from 'react-router-dom';
import * as ig from '../types/index';
import * as GameActions from '../actions/gameActionCreators';

import MenuNewTracker from '../components/MenuNewTracker/MenuNewTracker';
import TrackerGameView from './TrackerGameView';

interface TrackerViewProps extends RouteComponentProps<void> {
  game: ig.GameState;
  newGame(currentRoundIndex: number): GameActions.NewGame;
}

interface TrackerViewState {

}

class TrackerView extends React.Component<TrackerViewProps, TrackerViewState> {
  startGame = (currentRoundIndex: number) => {
    console.log('TrackerView, start game', currentRoundIndex);
    this.props.newGame(currentRoundIndex);
    this.props.history.push('/track/game');
  }

  render() {
    return (
      <Switch>
        <Route
          path="/track/game"
          render={(props) => (
            <TrackerGameView {...props} game={this.props.game} />
          )}
        />
        <Route
          render={(props) => (
            <MenuNewTracker {...props} startGame={this.startGame} />
          )}
        />
      </Switch>
    );
  }
}

function mapStateToProps({game}: ig.StoreState) {
  return {
    game,
  };
}

// function mapDispatchToProps(dispatch: Dispatch<GameActions.GameAction>) {
//   return {
//     newGame: (currentRoundIndex: number) => dispatch(GameActions.newGame(currentRoundIndex)),
//   };
// }

export default connect( mapStateToProps, {newGame: GameActions.newGame})(TrackerView);