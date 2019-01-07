import { judgeReducer } from '../judgeReducer'

describe('judgeReducer', () => {
  it('should return the correct default state', () => {
    const expected = 1
    
    const result = judgeReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return 1 if type is SET_JUDGE', () => {
    const expected = 1
    const action = { type: 'SET_JUDGE' }

    const result = judgeReducer(3, action)

    expect(result).toEqual(expected)
  })

  it('should return the correct judge id if type is CHANGE_JUDGE and the last player is the current judge', () => {
    const expected = 1
    const action = {
      type: 'CHANGE_JUDGE',
      players: 3
    }

    const result = judgeReducer(3, action)

    expect(result).toEqual(expected)
  })

  it('should return the correct judge id if type is CHANGE_JUDGE and the last player is not the current judge', () => {
    const expected = 3
    const action = {
      type: 'CHANGE_JUDGE',
      players: 3
    }

    const result = judgeReducer(2, action)

    expect(result).toEqual(expected)
  })
})