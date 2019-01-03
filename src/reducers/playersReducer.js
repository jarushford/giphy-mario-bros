export const playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      if (action.players === 3) {
        return [{ 'Player 1': 0 }, { 'Player 2': 0 }, { 'Player 3': 0 }]
      } else {
        return [{ 'Player 1': 0 }, { 'Player 2': 0 }, { 'Player 3': 0 }, { 'Player 4': 0 }]
      }
    case 'CLEAR_PLAYERS':
      return []
    default:
      return state
  }
}