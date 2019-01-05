export const choicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHOICE':
      return [...state, action.choice]
    default:
      return state
  }
}