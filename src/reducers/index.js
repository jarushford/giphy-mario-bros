import { currentCaptionReducer } from './currentCaptionReducer'
import { currentPlayerReducer } from './currentPlayerReducer'
import { unusedIDsReducer } from './UnusedIDsReducer'
import { choicesReducer } from './choicesReducer'
import { playersReducer } from './playersReducer'
import { roundReducer } from './roundReducer'
import { judgeReducer } from './judgeReducer'
import { errorReducer } from './errorReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  players: playersReducer,
  currentPlayer: currentPlayerReducer,
  judge: judgeReducer,
  unusedIDs: unusedIDsReducer,
  error: errorReducer,
  round: roundReducer,
  caption: currentCaptionReducer,
  choices: choicesReducer
})

export default rootReducer