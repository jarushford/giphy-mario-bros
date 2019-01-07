import { addNewGif, setError, setUnusedIDs } from '../actions'
import { getNewID } from './helpers'

export const drawNewGifThunk = (currentPlayer, unusedIDs) => {
  return async (dispatch) => {
    try {
      const newGif = getNewID(unusedIDs)
      const newUnusedIDs = unusedIDs.filter(ID => ID !== newGif)
      const gifs = JSON.parse(localStorage.getItem('gifs'))
      
      const result = gifs.filter(gif => gif.id === newGif)

      dispatch(addNewGif({ gif: result[0], player: currentPlayer - 1}))
      dispatch(setUnusedIDs(newUnusedIDs))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}