export const judgeReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_JUDGE':
      return action.player
    case 'CHANGE_JUDGE':
      if (state === action.players) {
        return 1
      } else {
        return state + 1
      }
    default:
      return state
  }
}