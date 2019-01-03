export const playersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return action.players
    case 'CLEAR_PLAYERS':
      return []
    default:
      return state
  }
}