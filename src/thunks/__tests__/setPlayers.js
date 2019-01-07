import { setPlayersThunk } from '../setPlayers'
import { setPlayers, setError, setUnusedIDs } from '../../actions'
import { getIDs, getUnusedIDs, storeGifs } from '../helpers'

jest.mock('../helpers')

describe('setPlayersThunk', () => {
  let mockDispatch
  let mockData

  beforeEach(() => {
    mockDispatch = jest.fn()
    mockData = [{ id: 1 }, { id: 2 }, { id: 3 }]
    localStorage.setItem('gifs', JSON.stringify(mockData))
    getIDs.mockImplementation(() => {
      return [
        'vi2ciYHi5u0FO',
        'yXPuErPgcf2Le',
        'l1Kuh28roYRsKQRBS',
        'bEH6uQUUVFWpjETjYa',
        'DR9DeLm91dHs4',
        'qda8xuqN1UIYo',
        'atQF1zaSGq8s8',
        '2rACp9a8RJCq5q2aqN',
        'F1T40na0jXYfm',
        '3o7aCTtqaJWnAm46L6',
        '6c2xTmMjeFxWU',
        'Sq4QZyBwagvle',
        'UTw9wnoyP8Pcs'
      ]
    })
    getUnusedIDs.mockImplementation(() => {
      return [
        '3ohfFIJ9M9XCUkE6Na',
        '3otPoo8NDLOmzvTJF6',
        '1iwwn8C3IntspsufCO',
        'l1KukLgJJk43U03EA',
        'DOx1tUiQaNSp2',
        '9mLHBla80fCbS',
        '3oKIPDvtRUP8vQL1eM',
        '12EwQNQPcejOUw'
      ]
    })
    storeGifs.mockImplementation(() => {
      localStorage.setItem('gifs', JSON.stringify(mockData))
    })
  })

  afterEach(() => {
    localStorage.removeItem('gifs')
  })

  it('should dispatch setPlayers if successful', async () => {
    const thunk = setPlayersThunk(3)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenNthCalledWith(1, setPlayers())
  })

  it('should dispatch setUnusedIDs if successful', async () => {
    const expected = [
      '3ohfFIJ9M9XCUkE6Na',
      '3otPoo8NDLOmzvTJF6',
      '1iwwn8C3IntspsufCO',
      'l1KukLgJJk43U03EA',
      'DOx1tUiQaNSp2',
      '9mLHBla80fCbS',
      '3oKIPDvtRUP8vQL1eM',
      '12EwQNQPcejOUw'
    ]
    const thunk = setPlayersThunk(3)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenNthCalledWith(2, setUnusedIDs(expected))
  })

  it('should store data if there is none already', async () => {
    localStorage.setItem('gifs', JSON.stringify([]))
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }]

    const thunk = setPlayersThunk(3)
    await thunk(mockDispatch)

    const data = JSON.parse(localStorage.getItem('gifs'))

    expect(data).toEqual(expected)

    localStorage.removeItem('gifs')
  })

  it('should dispatch setError if data storage fails', async () => {
    localStorage.setItem('gifs', JSON.stringify([]))
    storeGifs.mockImplementation(() => {
      throw Error('Could not store')
    })
    const thunk = setPlayersThunk(3)
    await thunk(mockDispatch)

    expect(mockDispatch).toBeCalledWith(setError('Could not store'))

    localStorage.removeItem('gifs')
  })
})