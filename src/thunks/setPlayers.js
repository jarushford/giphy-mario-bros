import { setPlayers, setError, setUnusedIDs } from '../actions'
import { getIDs, getUnusedIDs, buildPlayer, storeGifs } from './helpers'

export const setPlayersThunk = (players) => {
  return async (dispatch) => {
    const storage = JSON.parse(localStorage.getItem('gifs'))
    const IDs = getIDs(players)
    const unusedIDs = getUnusedIDs(IDs)

    if (!storage || !storage.length) {
      try{
        await storeGifs()
      } catch (error) {
        dispatch(setError(error.message))
      }
    }

    const gifs = JSON.parse(localStorage.getItem('gifs'))
    const response = gifs.filter(gif => IDs.includes(gif.id))
    
    const readyPlayers = buildPlayer(players, response)
    dispatch(setPlayers(readyPlayers))
    dispatch(setUnusedIDs(unusedIDs))
  }
}