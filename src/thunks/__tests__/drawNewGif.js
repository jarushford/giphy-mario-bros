import { drawNewGifThunk } from '../drawNewGif'
import { addNewGif, setError, setUnusedIDs } from '../../actions'
import { getNewID } from '../helpers'

jest.mock('../helpers')

describe('drawNewGifThunk', () => {
  let mockDispatch

  beforeEach(() => {
    const mockGifs = [{ id: 1 }, { id: 2 }, { id: 3 }]
    localStorage.setItem('gifs', JSON.stringify(mockGifs))
    mockDispatch = jest.fn()
  })

  afterEach(() => {
    localStorage.removeItem('gifs')
  })

  it('should dispatch setError if there is an error', () => {
    getNewID.mockImplementation(() => {
      throw Error('error')
    })

    const thunk = drawNewGifThunk(2, ['1', '4'])

    thunk(mockDispatch)

    expect(mockDispatch).toBeCalledWith(setError('error'))
  })

  it('should dispatch addNewGif with the correct gif if successful', () => {
    getNewID.mockImplementation(() => {
      return true
    })

    const thunk = drawNewGifThunk(2, ['1', '4'])

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenNthCalledWith(1, addNewGif({ gif: undefined, player: 1 }))
  })

  it('should dispatch addNewGif with the correct gif if successful', () => {
    getNewID.mockImplementation(() => {
      return true
    })

    const thunk = drawNewGifThunk(2, ['1', '4'])

    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenNthCalledWith(2, setUnusedIDs(['1', '4']))
  })
})