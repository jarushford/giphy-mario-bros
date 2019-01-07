import * as A from '../index'

describe('Actions', () => {
  it('setPlayers should return a type SET_PLAYERS with a player num', () => {
    const expected = {
      type: 'SET_PLAYERS',
      players: 3
    }

    const result = A.setPlayers(3)

    expect(result).toEqual(expected)
  })

  it('clearPlayers should return a type CLEAR_PLAYERS', () => {
    const expected = { type: 'CLEAR_PLAYERS' }

    const result = A.clearPlayers()

    expect(result).toEqual(expected)
  })

  it('setCurrentPlayer should return a type SET_CURRENT_PLAYER with a player num', () => {
    const expected = {
      type: 'SET_CURRENT_PLAYER',
      player: 2
    }

    const result = A.setCurrentPlayer(2)

    expect(result).toEqual(expected)
  })  

  it('setJudge should return a type SET_JUDGE', () => {
    const expected = { type: 'SET_JUDGE' }

    const result = A.setJudge()

    expect(result).toEqual(expected)
  })

  it('setError should return a type SET_ERROR with an error message', () => {
    const expected = {
      type: 'SET_ERROR',
      error: 'Oh no!'
    }

    const result = A.setError('Oh no!')

    expect(result).toEqual(expected)
  })

  it('clearError should return a type CLEAR_ERROR', () => {
    const expected = { type: 'CLEAR_ERROR' }

    const result = A.clearError()

    expect(result).toEqual(expected)
  })

  it('setUnusedIDs should return a type SET_UNUSED_IDS with an array of unused IDs', () => {
    const expected = {
      type: 'SET_UNUSED_IDS',
      unused: ['123', '234', '345']
    }

    const result = A.setUnusedIDs(['123', '234', '345'])

    expect(result).toEqual(expected)
  })

  it('nextRound should return a type NEXT_ROUND', () => {
    const expected = { type: 'NEXT_ROUND' }

    const result = A.nextRound()

    expect(result).toEqual(expected)
  })

  it('resetRound should return a type RESET_ROUND', () => {
    const expected = { type: 'RESET_ROUND' }

    const result = A.resetRound()

    expect(result).toEqual(expected)
  })

  it('setCaption should return a type SET_CAPTION and a caption', () => {
    const expected = {
      type: 'SET_CAPTION',
      caption: 'Words about stuff'
    }

    const result = A.setCaption('Words about stuff')

    expect(result).toEqual(expected)
  })

  it('clearCaptions should return a type CLEAR_CAPTIONS', () => {
    const expected = { type: 'CLEAR_CAPTIONS' }

    const result = A.clearCaptions()

    expect(result).toEqual(expected)
  })

  it('addChoice should return a type ADD_CHOICE and a choice obj', () => {
    const expected = {
      type: 'ADD_CHOICE',
      choice: { url: 'kjasdfjsdfkljsdf.gif', player: 1 }
    }

    const result = A.addChoice({ url: 'kjasdfjsdfkljsdf.gif', player: 1 })

    expect(result).toEqual(expected)
  })

  it('clearChoices should return a type CLEAR_CHOICES', () => {
    const expected = { type: 'CLEAR_CHOICES' }

    const result = A.clearChoices()

    expect(result).toEqual(expected)
  })

  it('updatePlayerGifs should return a type UPDATE_PLAYER_GIFS and a url', () => {
    const expected = {
      type: 'UPDATE_PLAYER_GIFS',
      url: 'stuff.gif'
    }

    const result = A.updatePlayerGifs('stuff.gif')

    expect(result).toEqual(expected)
  })

  it('addNewGif should return a type ADD_NEW_GIF and a gif obj', () => {
    const expected = {
      type: 'ADD_NEW_GIF',
      gif: { url: 'sdf.gif', id: 'qwe' }
    }

    const result = A.addNewGif({ url: 'sdf.gif', id: 'qwe' })

    expect(result).toEqual(expected)
  })

  it('selectWinner should return a type SELECT_WINNER and a player', () => {
    const expected = {
      type: 'SELECT_WINNER',
      player: 3
    }

    const result = A.selectWinner(3)

    expect(result).toEqual(expected)
  })

  it('changeJudge should return a type CHANGE_JUDGE and the num of players', () => {
    const expected = {
      type: 'CHANGE_JUDGE',
      players: 4
    }

    const result = A.changeJudge(4)

    expect(result).toEqual(expected)
  })
})