import React from 'react'
import { GameBoard, mapStateToProps } from '../GameBoard'
import { shallow } from 'enzyme'

describe('GameBoard', () => {
  let mockPlayers
  let mockJudge
  let mockCaption
  let mockCurrent

  beforeEach(() => {
    mockPlayers = [{ player: 1, score: 0 }, { player: 2, score: 0 }, { player: 3, score: 0 } ]
    mockJudge = 2
    mockCaption = ['Test Caption']
    mockCurrent = 3
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<GameBoard players={mockPlayers} judge={mockJudge} caption={mockCaption} currentPlayer={mockCurrent} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot if the current player is the judge', () => {
    const wrapper = shallow(<GameBoard players={mockPlayers} judge={mockJudge} caption={mockCaption} currentPlayer={2} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot with no players', () => {
    const wrapper = shallow(<GameBoard players={[]} judge={mockJudge} caption={mockCaption} currentPlayer={mockCurrent} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return a props object with the correct properties from state', () => {
      const mockState = {
        players: [{ player: 1, score: 0 }, { player: 2, score: 0 }, { player: 3, score: 0 } ],
        judge: 1,
        currentPlayer: 2,
        caption: ['Test Caption'],
        error: '',
        choices: []
      }
      const expected = {
        players: [{ player: 1, score: 0 }, { player: 2, score: 0 }, { player: 3,score: 0 } ],
        judge: 1,
        currentPlayer: 2,
        caption: ['Test Caption']
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})