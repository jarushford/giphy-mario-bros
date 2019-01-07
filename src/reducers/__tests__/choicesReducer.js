import { choicesReducer } from '../choicesReducer'

describe('choicesReducer', () => {
  it('it should return the correct default state', () => {
    const expected = []

    const result = choicesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should add a players choice to state if type is ADD_CHOICE', () => {
    const expected = [{ gif: 'test1.gif', player: 1 }, { gif: 'test2.gif', player: 2 }]
    const action = {
      type: 'ADD_CHOICE',
      choice: { gif: 'test2.gif', player: 2 }
    }

    const result = choicesReducer([{ gif: 'test1.gif', player: 1 }], action)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if type is CLEAR_CHOICES', () => {
    const expected = []
    const action = { type: 'CLEAR_CHOICES' }

    const result = choicesReducer([{ gif: 'test1.gif', player: 1 }], action)

    expect(result).toEqual(expected)
  })
})