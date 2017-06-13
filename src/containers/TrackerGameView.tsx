import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as ig from '../types/index';

interface TrackerGameViewProps extends RouteComponentProps<void> {
  game: ig.GameState;
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

  render() {
    return (
      <div>
        <h2>Game started at round {this.props.game.currentRoundIndex + 1}</h2>
      </div>
    );
  }
}


export default TrackerGameView;