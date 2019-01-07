import { currentCaptionReducer } from '../currentCaptionReducer'

describe('currentCaptionReducer', () => {
  it('should return the correct default state', () => {
    const expected = []

    const result = currentCaptionReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a list of used captions with the new caption when type is SET_CAPTION', () => {
    const expected = ['Caption1', 'Caption2']
    const action = {
      type: 'SET_CAPTION',
      caption: 'Caption1'
    }

    const result = currentCaptionReducer(['Caption2'], action)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if type is CLEAR_CAPTIONS', () => {
    const expected = []
    const action = { type: 'CLEAR_CAPTIONS' }

    const result = currentCaptionReducer(['Caption1', 'Caption2'], action)

    expect(result).toEqual(expected)
  })
})