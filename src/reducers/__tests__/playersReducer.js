import { playersReducer } from '../playersReducer'

describe('playersReducer', () => {
  it('should return the correct default state', () => {
    const expected = []

    const result = playersReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return an array of players if type is SET_PLAYERS', () => {
    const players = [
      { player: 1, score: 0 },
      { player: 2, score: 0 },
      { player: 3, score: 0 }
    ]
    const action = {
      type: 'SET_PLAYERS',
      players
    }

    const result = playersReducer(undefined, action)

    expect(result).toEqual(players)
  })

  it('should return an empty array if type is CLEAR_PLAYERS', () => {
    const expected = []
    const action = { type: 'CLEAR_PLAYERS' }

    const result = playersReducer(['p1', 'p2', 'p3'], action)

    expect(result).toEqual(expected)
  })

  it('should remove the correct gif if type is UPDATE_PLAYER_GIFS', () => {
    const mockState = [
      {
        player: 1,
        gifs: [
          {
            images: {
              fixed_width: { url: 'test1' }
            }
          },
          {
            images: {
              fixed_width: { url: 'test2' }
            }
          }
        ]
      }
    ]
    const expected = [
      {
        player: 1,
        gifs: [
          {
            images: {
              fixed_width: { url: 'test1' }
            }
          }
        ]
      }
    ]
    const action = {
      type: 'UPDATE_PLAYER_GIFS',
      url: { url: 'test2', player: 0 }
    }

    const result = playersReducer(mockState, action)

    expect(result).toEqual(expected)
  })

  it('should return a new copy of state with an added gif if type is ADD_NEW_GIF', () => {
    const mockState = [
      {
        player: 1,
        gifs: [
          {
            images: {
              fixed_width: { url: 'test1' }
            }
          }
        ]
      }
    ]
    const expected = [
      {
        player: 1,
        gifs: [
          {
            images: {
              fixed_width: { url: 'test1' }
            }
          },
          {
            images: {
              fixed_width: { url: 'test2' }
            }
          }
        ]
      }
    ]
    const gifToAdd = {
      images: {
        fixed_width: { url: 'test2' }
      }
    }
    const action = {
      type: 'ADD_NEW_GIF',
      gif: { gif: gifToAdd, player: 0 }
    }

    const result = playersReducer(mockState, action)

    expect(result).toEqual(expected)
  })

  it('should return a new copy of state with updated scores if type is SELECT_WINNER', () => {
    const mockState = [
      { player: 1, score: 100 },
      { player: 2, score: 200 },
      { player: 3, score: 0 }
    ]
    const expected = [
      { player: 1, score: 100 },
      { player: 2, score: 200 },
      { player: 3, score: 100 }
    ]
    const action = {
      type: 'SELECT_WINNER', 
      player: 3
    }

    const result = playersReducer(mockState, action)

    expect(result).toEqual(expected)
  })
})