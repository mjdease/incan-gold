import { combineReducers } from 'redux';

import { StoreState } from '../types/index';

import GameReducer from './gameReducer';

const rootReducers = combineReducers<StoreState>({
  game: GameReducer,
});

export default rootReducers;