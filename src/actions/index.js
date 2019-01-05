export const setPlayers = (players) => ({
  type: 'SET_PLAYERS',
  players
})

export const clearPlayers = () => ({
  type: 'CLEAR_PLAYERS'
})

export const setCurrentPlayer = (player) => ({
  type: 'SET_CURRENT_PLAYER',
  player
})

export const setJudge = (player) => ({
  type: 'SET_JUDGE',
  player
})

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
})

export const clearError = () => ({
  type: 'CLEAR_ERROR'
})

export const setUnusedIDs = (unused) => ({
  type: 'SET_UNUSED_IDS',
  unused
})

export const nextRound = () => ({
  type: 'NEXT_ROUND'
})

export const setCaption = (caption) => ({
  type: 'SET_CAPTION',
  caption
})

export const addChoice = (choice) => ({
  type: 'ADD_CHOICE',
  choice
})

export const updatePlayerGifs = (url) => ({
  type: 'UPDATE_PLAYER_GIFS',
  url
})

export const addNewGif = (gif) => ({
  type: 'ADD_NEW_GIF',
  gif
})