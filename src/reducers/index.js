import { playersReducer } from './playersReducer'
import { errorReducer } from './errorReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  players: playersReducer,
  error: errorReducer
})

export default rootReducer