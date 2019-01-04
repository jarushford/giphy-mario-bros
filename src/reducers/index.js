import { currentPlayerReducer } from './currentPlayerReducer'
import { unusedIDsReducer } from './UnusedIDsReducer'
import { playersReducer } from './playersReducer'
import { errorReducer } from './errorReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  players: playersReducer,
  currentPlayer: currentPlayerReducer,
  unusedIDs: unusedIDsReducer,
  error: errorReducer
})

export default rootReducer