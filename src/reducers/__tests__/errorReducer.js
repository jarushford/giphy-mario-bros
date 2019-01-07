import { errorReducer } from '../errorReducer'

describe('errorReducer', () => {
  it('should return the correct default state', () => {
    const expected = ''

    const result = errorReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return an error message if type is SET_ERROR', () => {
    const expected = 'Did not do the thing'
    const action = {
      type: 'SET_ERROR',
      error: 'Did not do the thing'
    }

    const result = errorReducer('', action)

    expect(result).toEqual(expected)
  })

  it('should return an empty string if type is CLEAR_ERROR', () => {
    const expected = ''
    const action = { type: 'CLEAR_ERROR' }

    const result = errorReducer('Stuff', action)

    expect(result).toEqual(expected)
  })
})