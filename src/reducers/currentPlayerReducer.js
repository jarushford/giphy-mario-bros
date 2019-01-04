export const currentPlayerReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PLAYER':
      return action.player
    default:
      return state
  }
}