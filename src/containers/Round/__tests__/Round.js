import React from 'react'
import { Round, mapStateToProps } from '../Round'
import { shallow } from 'enzyme'

describe('Round', () => {
  it('should match the snapshot', () => {
    const mockPlayers = ['P1', 'P2', 'P3']
    const wrapper = shallow(<Round round={1} players={mockPlayers} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with no players', () => {
    const mockPlayers = []
    const wrapper = shallow(<Round round={1} players={mockPlayers} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a props object with round and players', () => {
      const mockState = {
        round: 2,
        players: ['P1', 'P2', 'P3'],
        judge: 1,
        currentPlayer: 2
      }
      const expected = {
        round: 2,
        players: ['P1', 'P2', 'P3']
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})