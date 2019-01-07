import { currentPlayerReducer } from '../currentPlayerReducer'

describe('currentPlayerReducer', () => {
  it('should return the correct default state', () => {
    const expected = 2

    const result = currentPlayerReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the current player if type is SET_CURRENT_PLAYER', () => {
    const expected = 3
    const action = {
      type: 'SET_CURRENT_PLAYER',
      player: 3
    }

    const result = currentPlayerReducer(2, action)

    expect(result).toEqual(expected)
  })
})