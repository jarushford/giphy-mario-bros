export const setPlayers = (players) => ({
  type: 'SET_PLAYERS',
  players
})

export const clearPlayers = () => ({
  type: 'CLEAR_PLAYERS'
})

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
})

export const clearError = () => ({
  type: 'CLEAR_ERROR'
})