export const judgeReducer = (state = 1, action) => {
  switch (action.type) {
    case 'SET_JUDGE':
      return action.player
    default:
      return state
  }
}