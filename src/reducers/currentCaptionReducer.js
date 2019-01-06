export const currentCaptionReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CAPTION':
      return [action.caption, ...state]
    case 'CLEAR_CAPTIONS':
      return []
    default:
      return state
  }
}