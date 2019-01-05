import { apiKey } from '../utils/apiKey'
import { addNewGif, setError, setUnusedIDs } from '../actions'
import { getNewID } from './helpers'

export const drawNewGifThunk = (currentPlayer, unusedIDs) => {
  return async (dispatch) => {
    try {
      const newGif = getNewID(unusedIDs)
      const newUnusedIDs = unusedIDs.filter(ID => ID !== newGif)

      const url = `http://api.giphy.com/v1/gifs/${newGif}?api_key=${apiKey}`
      const response = await fetch(url)
      
      if (!response.ok) {
        throw Error('Could not fetch GIF')
      }

      const result = await response.json()
      dispatch(addNewGif({ gif: result.data, player: currentPlayer - 1}))
      dispatch(setUnusedIDs(newUnusedIDs))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}