import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from '../App'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MemoryRouter, Link } from 'react-router-dom'
import Round from '../../Round/Round'
import GameBoard from '../../GameBoard/GameBoard'
import Selection from '../../Selection/Selection'
import { clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs } from '../../../actions';

describe('App', () => {
  let wrapper
  let mockClearPlayers
  let mockClearChoices
  let mockSetPlayer
  let mockSetJudge
  let mockSetIDs
  let mockError

  beforeEach(() => {
    mockError = ''
    mockClearPlayers = jest.fn()
    mockClearChoices = jest.fn()
    mockSetPlayer = jest.fn()
    mockSetJudge = jest.fn()
    mockSetIDs = jest.fn()
    wrapper = shallow(<App 
      error={mockError}
      clearPlayers={mockClearPlayers}
      clearChoices={mockClearChoices}
      setCurrentPlayer={mockSetPlayer}
      setJudge={mockSetJudge}
      setUnusedIDs={mockSetIDs}
    />)
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with an error', () => {
    const wrapper = shallow(<App error={'error'} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should return a props object from mapStateToProps', () => {
    const mockState = {
      error: '',
      judge: 1
    }
    const expected = { error: '' }

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should render correct components if on home route', () => {
    const wrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find(Round)).toHaveLength(1)
    expect(wrapper.find(GameBoard)).toHaveLength(1)
    expect(wrapper.find(Selection)).toHaveLength(1)
    expect(wrapper.find(Link)).toHaveLength(1)
  })

  it('should call clearPlayers when game is reset', () => {
    const mountWrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App 
            error={mockError}
            clearPlayers={mockClearPlayers}
            clearChoices={mockClearChoices}
            setCurrentPlayer={mockSetPlayer}
            setJudge={mockSetJudge}
            setUnusedIDs={mockSetIDs}
          />
        </MemoryRouter>
      </Provider>
    )
    mountWrapper.find('.Home-Link').first().simulate('click')

    expect(mockClearPlayers).toBeCalled()
  })

  it('should call clearChoices when game is reset', () => {
    const mountWrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App 
            error={mockError}
            clearPlayers={mockClearPlayers}
            clearChoices={mockClearChoices}
            setCurrentPlayer={mockSetPlayer}
            setJudge={mockSetJudge}
            setUnusedIDs={mockSetIDs}
          />
        </MemoryRouter>
      </Provider>
    )
    mountWrapper.find('.Home-Link').first().simulate('click')

    expect(mockClearChoices).toBeCalled()
  })

  it('should call setCurrentPlayer when game is reset', () => {
    const mountWrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App 
            error={mockError}
            clearPlayers={mockClearPlayers}
            clearChoices={mockClearChoices}
            setCurrentPlayer={mockSetPlayer}
            setJudge={mockSetJudge}
            setUnusedIDs={mockSetIDs}
          />
        </MemoryRouter>
      </Provider>
    )
    mountWrapper.find('.Home-Link').first().simulate('click')

    expect(mockSetPlayer).toBeCalled()
  })

  it('should call setJudge when game is reset', () => {
    const mountWrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App 
            error={mockError}
            clearPlayers={mockClearPlayers}
            clearChoices={mockClearChoices}
            setCurrentPlayer={mockSetPlayer}
            setJudge={mockSetJudge}
            setUnusedIDs={mockSetIDs}
          />
        </MemoryRouter>
      </Provider>
    )
    mountWrapper.find('.Home-Link').first().simulate('click')

    expect(mockSetJudge).toBeCalled()
  })

  it('should call setUnusedIDs when game is reset', () => {
    const mountWrapper = mount(
      <Provider store={createStore(() => ({
        round: 1,
        players: [],
        choices: [],
        usedCaptions: [],
        currentPlayer: 1,
        judge: 3,
        caption: [],
        unusedIDs: []
      }))}>
        <MemoryRouter initialEntries={['/home']}>
          <App 
            error={mockError}
            clearPlayers={mockClearPlayers}
            clearChoices={mockClearChoices}
            setCurrentPlayer={mockSetPlayer}
            setJudge={mockSetJudge}
            setUnusedIDs={mockSetIDs}
          />
        </MemoryRouter>
      </Provider>
    )
    mountWrapper.find('.Home-Link').first().simulate('click')

    expect(mockSetIDs).toBeCalled()
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