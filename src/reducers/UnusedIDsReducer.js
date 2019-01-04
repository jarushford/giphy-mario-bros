export const unusedIDsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_UNUSED_IDS':
      return action.unused
    default:
      return state
  }
}