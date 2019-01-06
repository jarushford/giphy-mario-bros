export const roundReducer = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_ROUND':
      return state + 1
    case 'RESET_ROUND':
      return 0
    default:
      return state
  }
}