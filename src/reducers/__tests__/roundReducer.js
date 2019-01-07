import { roundReducer } from '../roundReducer'

describe('roundReducer', () => {
  it('should return the correct default state', () => {
    const expected = 0

    const result = roundReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should increment round by 1 if type is NEXT_ROUND', () => {
    const expected = 4
    const action = { type: 'NEXT_ROUND' }

    const result = roundReducer(3, action)

    expect(result).toEqual(expected)
  })

  it('should return 0 if type is RESET_ROUND', () => {
    const expected = 0
    const action = { type: 'RESET_ROUND' }

    const result = roundReducer(3, action)

    expect(result).toEqual(expected)
  })
})