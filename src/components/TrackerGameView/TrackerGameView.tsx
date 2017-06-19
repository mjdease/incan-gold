import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as ig from '../../types/index';
import * as GameActions from '../../actions/gameActionCreators';


interface TrackerGameViewProps extends RouteComponentProps<void> {
  game: ig.GameState;
  endGame: GameActions.endGameActionCreator;
}

interface TrackerGameViewState {

}

class TrackerGameView extends React.Component<TrackerGameViewProps, TrackerGameViewState> {

  componentWillMount() {
    if (!this.isGameStateValid(this.props.game)) {
      this.props.history.push('/track');
    }
  }

  isGameStateValid(gameState: ig.GameState): boolean {
    if (typeof gameState.currentRoundIndex !== 'number') {
      return false;
    }
    return true;
  }

  endGame = () => {
    this.props.endGame();
  }

  render() {
    return (
      <div>
        <h2>Game started at round {this.props.game.currentRoundIndex + 1}</h2>
        <button onClick={this.endGame}>end me</button>
      </div>
    );
  }
}


export default TrackerGameView;