import { unusedIDsReducer } from '../UnusedIDsReducer'

describe('UnusedIDsReducer', () => {
  it('should return the correct default state', () => {
    const expected = []

    const result = unusedIDsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return an array of unused IDs if type is SET_UNUSED_IDS', () => {
    const expected = [1, 2, 3, 4]
    const action = {
      type: 'SET_UNUSED_IDS',
      unused: expected
    }

    const result = unusedIDsReducer(undefined, action)

    expect(result).toEqual(expected)
  })
})