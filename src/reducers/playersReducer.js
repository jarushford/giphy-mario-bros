export const playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return action.players
    case 'CLEAR_PLAYERS':
      return []
    case 'UPDATE_PLAYER_GIFS':
      const currentPlayer = state.slice()[action.url.player]
      const gifsToKeep = currentPlayer.gifs.filter(gif => {
        return gif.images.fixed_width.url !== action.url.url
      })
      currentPlayer.gifs = gifsToKeep
      state.slice().splice(action.url.player, 1, currentPlayer)
      return state
    case 'ADD_NEW_GIF':
      const newGifPlayer = state.slice()[action.gif.player]
      newGifPlayer.gifs.push(action.gif.gif)
      state.slice().splice(action.gif.player, 1, newGifPlayer)
      return state
    case 'SELECT_WINNER':
      const newState = state.slice()
      newState.forEach(player => {
        if (player.player === action.player) {
          player.score += 100
        }
      })
      return newState
    default:
      return state
  }
}