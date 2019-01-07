import React from 'react'
import { NewGame, mapStateToProps, mapDispatchToProps } from '../NewGame'
import { clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs } from '../../../actions'
import { shallow } from 'enzyme'

describe('NewGame', () => {
  let mockPlayers
  let mockClearPlayers
  let mockClearChoices
  let mockSetPlayer
  let mockSetJudge
  let mockSetIDs
  let wrapper

  beforeEach(() => {
    mockPlayers = [{ player: 1, score: 0 }, { player: 2, score: 0 }, { player: 3, score: 0 } ]
    mockClearPlayers = jest.fn()
    mockClearChoices = jest.fn()
    mockSetPlayer = jest.fn()
    mockSetJudge = jest.fn()
    mockSetIDs = jest.fn()
    wrapper = shallow(<NewGame 
      players={mockPlayers}
      clearPlayers={mockClearPlayers}
      clearChoices={mockClearChoices}
      setCurrentPlayer={mockSetPlayer}
      setJudge={mockSetJudge}
      setUnusedIDs={mockSetIDs}
    />)
  })

  describe('NewGame Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call clearPlayers when game is reset', () => {
      wrapper.find('Link').simulate('click')

      expect(mockClearPlayers).toBeCalled()
    })

    it('should call clearChoices when game is reset', () => {
      wrapper.find('Link').simulate('click')

      expect(mockClearChoices).toBeCalled()
    })

    it('should call setCurrentPlayer when game is reset', () => {
      wrapper.find('Link').simulate('click')

      expect(mockSetPlayer).toBeCalled()
    })

    it('should call setJudge when game is reset', () => {
      wrapper.find('Link').simulate('click')

      expect(mockSetJudge).toBeCalled()
    })

    it('should call setUnusedIDs when game is reset', () => {
      wrapper.find('Link').simulate('click')

      expect(mockSetIDs).toBeCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object with players', () => {
      const mockState = {
        players: mockPlayers,
        error: '',
        judge: 1
      }
      const expected = {
        players: mockPlayers
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })

    it('should dispatch clearPlayers when the prop clearPlayers is called', () => {
      const expected = clearPlayers()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.clearPlayers()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch clearChoices when the prop clearPlayers is called', () => {
      const expected = clearChoices()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.clearChoices()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setCurrentPlayer when the prop clearPlayers is called', () => {
      const expected = setCurrentPlayer(2)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCurrentPlayer(2)

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setJudge when the prop clearPlayers is called', () => {
      const expected = setJudge()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setJudge()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setUnusedIDs when the prop clearPlayers is called', () => {
      const expected = setUnusedIDs([1, 2, 3])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setUnusedIDs([1, 2, 3])

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })
})