import * as Game from './game';

export * from './game';

export interface StoreState {
  game: Game.GameState;
}
