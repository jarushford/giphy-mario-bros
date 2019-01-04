import { apiKey } from '../utils/apiKey'
import { setPlayers, setError, setUnusedIDs } from '../actions'
import { getIDs, getUnusedIDs, buildPlayer } from './helpers'

export const setPlayersThunk = (players) => {
  return async (dispatch) => {
    const IDs = getIDs(players)
    const unusedIDs = getUnusedIDs(IDs)

    const unresolvedPromises = IDs.map(async (id) => {
      try {
        const url = `http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
        const response = await fetch(url)
        
        if (!response.ok) {
          throw Error('Could not fetch GIFs')
        }

        const result = await response.json()
        return result.data
      } catch (error) {
        dispatch(setError(error.message))
      }
    })
    
    const response = await Promise.all(unresolvedPromises)
    const readyPlayers = buildPlayer(players, response)
    dispatch(setPlayers(readyPlayers))
    dispatch(setUnusedIDs(unusedIDs))
  }
}