import React from 'react'
import { App, mapStateToProps } from '../App'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MemoryRouter, Link } from 'react-router-dom'
import Round from '../../Round/Round'
import GameBoard from '../../GameBoard/GameBoard'
import Selection from '../../Selection/Selection'

describe('App', () => {
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
})