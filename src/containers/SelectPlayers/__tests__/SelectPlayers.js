import React from 'react'
import { SelectPlayers, mapStateToProps, mapDispatchToProps } from '../SelectPlayers'
import { shallow } from 'enzyme'
import { setCaption } from '../../../actions'
import { setPlayersThunk } from '../../../thunks/setPlayers'

jest.mock('../../../thunks/setPlayers')

describe('SelectPlayers', () => {
  let mockSetPlayers
  let mockSetCaption
  let mockUsedCaptions
  let wrapper

  beforeEach(() => {
    mockSetPlayers = jest.fn()
    mockSetCaption = jest.fn()
    mockUsedCaptions = ['Test1', 'Test2']
    wrapper = shallow(<SelectPlayers 
        setPlayers={mockSetPlayers}
        setCaption={mockSetCaption}
        usedCaptions={mockUsedCaptions}
      />)
  })

  describe('SelectPlayers Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should call setPlayers on click for three players', () => {
      wrapper.find('Link').first().simulate('click')

      expect(mockSetPlayers).toBeCalledWith(3)
    })

    it('should call setCaption on click for three players', () => {
      wrapper.find('Link').first().simulate('click')

      expect(mockSetCaption).toBeCalled()
    })

    it('should call setPlayers on click for four players', () => {
      wrapper.find('Link').last().simulate('click')

      expect(mockSetPlayers).toBeCalledWith(4)
    })

    it('should call setCaption on click for four players', () => {
      wrapper.find('Link').last().simulate('click')

      expect(mockSetCaption).toBeCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object with usedCaptions', () => {
      const mockState = {
        caption: mockUsedCaptions,
        judge: 1,
        error: ''
      }
      const expected = {
        usedCaptions: mockUsedCaptions
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
    
    it('should dispatch setCaption when the prop setPlayers is called', () => {
      const expected = setCaption()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setCaption()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setPlayers when the prop setPlayers is called', () => {
      const expected = setPlayersThunk()

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPlayers()

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })
})