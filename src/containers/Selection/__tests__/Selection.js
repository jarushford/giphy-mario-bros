import React from 'react'
import { Selection, mapStateToProps, mapDispatchToProps } from '../Selection'
import { shallow } from 'enzyme'
import { addChoice, setCurrentPlayer, updatePlayerGifs, selectWinner, changeJudge, clearChoices, setCaption, nextRound } from '../../../actions'
import { drawNewGifThunk } from '../../../thunks/drawNewGif'

jest.mock('../../../thunks/drawNewGif')

describe('Selection', () => {
  let mockPlayers
  let mockCurrent
  let mockUnusedIDs
  let mockJudge
  let mockChoices
  let mockUsedCaptions
  let mockRound
  let mockAddChoice
  let mockSetCurrent
  let mockUpdateGifs
  let mockDrawNew
  let mockSelectWinner
  let mockChangeJudge
  let mockClearChocies
  let mockSetCaption
  let mockNextRound
  let wrapper

  beforeEach(() => {
    mockPlayers = [{ player: 1, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 2, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 3, score: 0, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }]
    mockCurrent = 2
    mockUnusedIDs = ['123', '234', '345']
    mockJudge = 1
    mockChoices = [{ gif: 'Test1.gif', player: 2 }, { gif: 'Test2.gif', player: 3 }]
    mockUsedCaptions = ['Test1', 'Test2']
    mockRound = 2
    mockAddChoice = jest.fn()
    mockSetCurrent = jest.fn()
    mockUpdateGifs = jest.fn()
    mockDrawNew = jest.fn()
    mockSelectWinner = jest.fn()
    mockChangeJudge = jest.fn()
    mockClearChocies = jest.fn()
    mockSetCaption = jest.fn()
    mockNextRound = jest.fn()
    wrapper = shallow(<Selection 
      players={mockPlayers}
      currentPlayer={mockCurrent}
      unusedIDs={mockUnusedIDs}
      judge={mockJudge}
      choices={mockChoices}
      usedCaptions={mockUsedCaptions}
      round={mockRound}
      addChoice={mockAddChoice}
      setCurrentPlayer={mockSetCurrent}
      updatePlayerGifs={mockUpdateGifs}
      drawNewGifThunk={mockDrawNew}
      selectWinner={mockSelectWinner}
      changeJudge={mockChangeJudge}
      clearChoices={mockClearChocies}
      setCaption={mockSetCaption}
      nextRound={mockNextRound}
    />)
  })

  describe('Selection Component', () => {
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot with no players', () => {
      const wrapper = shallow(<Selection 
        players={[]}
        currentPlayer={mockCurrent}
        unusedIDs={mockUnusedIDs}
        judge={mockJudge}
        choices={mockChoices}
        usedCaptions={mockUsedCaptions}
        round={mockRound}
        addChoice={mockAddChoice}
        setCurrentPlayer={mockSetCurrent}
        updatePlayerGifs={mockUpdateGifs}
        drawNewGifThunk={mockDrawNew}
        selectWinner={mockSelectWinner}
        changeJudge={mockChangeJudge}
        clearChoices={mockClearChocies}
        setCaption={mockSetCaption}
        nextRound={mockNextRound}
      />)
      wrapper.setState({ preTurn: false })

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if it is the last round', () => {
      const wrapper = shallow(<Selection 
        players={mockPlayers}
        currentPlayer={mockCurrent}
        unusedIDs={mockUnusedIDs}
        judge={mockJudge}
        choices={mockChoices}
        usedCaptions={mockUsedCaptions}
        round={7}
        addChoice={mockAddChoice}
        setCurrentPlayer={mockSetCurrent}
        updatePlayerGifs={mockUpdateGifs}
        drawNewGifThunk={mockDrawNew}
        selectWinner={mockSelectWinner}
        changeJudge={mockChangeJudge}
        clearChoices={mockClearChocies}
        setCaption={mockSetCaption}
        nextRound={mockNextRound}
      />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should match the snapshot if the judge is the current player', () => {
      const wrapper = shallow(<Selection 
        players={mockPlayers}
        currentPlayer={1}
        unusedIDs={mockUnusedIDs}
        judge={mockJudge}
        choices={mockChoices}
        usedCaptions={mockUsedCaptions}
        round={mockRound}
        addChoice={mockAddChoice}
        setCurrentPlayer={mockSetCurrent}
        updatePlayerGifs={mockUpdateGifs}
        drawNewGifThunk={mockDrawNew}
        selectWinner={mockSelectWinner}
        changeJudge={mockChangeJudge}
        clearChoices={mockClearChocies}
        setCaption={mockSetCaption}
        nextRound={mockNextRound}
      />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should set state accordingly when the carousel is adjusted', async () => {
      await wrapper.instance().adjustCarousel(1)
      expect(wrapper.state().adjustment).toEqual(1)

      await wrapper.instance().adjustCarousel(-1)
      expect(wrapper.state().adjustment).toEqual(0)
    })

    it('should only adjustCarousel if within limits', async () => {
      await wrapper.instance().adjustCarousel(-1)
      expect(wrapper.state().adjustment).toEqual(0)

      wrapper.setState({ adjustment: 5 })
      await wrapper.instance().adjustCarousel(1)
      expect(wrapper.state().adjustment).toEqual(5)
    })

    it('should toggle preTurn when the Choose GIF button is clicked', async () => {
      await wrapper.find('.start-turn').simulate('click')

      expect(wrapper.state().preTurn).toEqual(false)
    })

    describe('selectGIf', () => {
      it('should call addChoice with a gif and player when selectGif is called', () => {
        wrapper.instance().selectGif('testUrl')

        expect(mockAddChoice).toBeCalledWith({ gif: 'testUrl', player: 2 })
      })

      it('should call updatePlayerGifs with a url and a player', () => {
        const expected = {
          url: 'testUrl',
          player: 1
        }

        wrapper.instance().selectGif('testUrl')

        expect(mockUpdateGifs).toBeCalledWith(expected)
      })

      it('should call drawNewGifThunk with the current player and unusedIDs', () => {
        wrapper.instance().selectGif('testUrl')

        expect(mockDrawNew).toBeCalledWith(2, ['123', '234', '345'])
      })

      it('should call changePlayer', () => {
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'changePlayer')
        instance.selectGif('testUrl')

        expect(spy).toBeCalled()
      })

      it('should set state of preTurn to true and adjustment to 0', async () => {
        wrapper.setState({ preTurn: false, adjustment: 3 })
        await wrapper.instance().selectGif('testUrl')

        expect(wrapper.state().preTurn).toEqual(true)
        expect(wrapper.state().adjustment).toEqual(0)
      })
    })

    describe('changePlayer', () => {
      it('should call setCurrentPlayer with 1 if current is the last player', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={3}
          unusedIDs={mockUnusedIDs}
          judge={mockJudge}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)

        wrapper.instance().changePlayer()

        expect(mockSetCurrent).toBeCalledWith(1)
      })

      it('should call setCurrentPlayer with the next player if current is not the last player', () => {
        wrapper.instance().changePlayer()

        expect(mockSetCurrent).toBeCalledWith(3)
      })
    })

    describe('selectWinner', () => {
      it('should call the prop selectWinner with a player id', () => {
        wrapper.instance().selectWinner(2)

        expect(mockSelectWinner).toBeCalledWith(2)
      })

      it('should call changeJudge and pass in the number of players', () => {
        wrapper.instance().selectWinner(2)

        expect(mockChangeJudge).toBeCalledWith(3)
      })

      it('should call clearChoices', () => {
        wrapper.instance().selectWinner(2)

        expect(mockClearChocies).toBeCalled()
      })

      it('should call setCaption', () => {
        wrapper.instance().selectWinner(2)

        expect(mockSetCaption).toBeCalled()
      })

      it('should call nextRound', () => {
        wrapper.instance().selectWinner(2)

        expect(mockNextRound).toBeCalled()
      })

      it('should call setCurrentPlayer with 2 if the judge is the last player', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={mockCurrent}
          unusedIDs={mockUnusedIDs}
          judge={3}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)
        wrapper.instance().selectWinner(2)

        expect(mockSetCurrent).toBeCalledWith(2)
      })

      it('should call setCurrentPlayer with 1 if the judge is the next to last player', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={mockCurrent}
          unusedIDs={mockUnusedIDs}
          judge={2}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)
        wrapper.instance().selectWinner(2)

        expect(mockSetCurrent).toBeCalledWith(1)
      })

      it('should call setCurrent player with the correct player as a default', () => {
        wrapper.instance().selectWinner(2)

        expect(mockSetCurrent).toBeCalledWith(3)
      })
    })

    describe('interactions', () => {
      it('should call adjustCarousel down onClick', () => {
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'adjustCarousel')
        wrapper.setState({ preTurn: false })
        wrapper.find('.adj-down').simulate('click')

        expect(spy).toBeCalled()
      })

      it('should call adjustCarousel up onClick', () => {
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'adjustCarousel')
        wrapper.setState({ preTurn: false })
        wrapper.find('.adj-up').simulate('click')

        expect(spy).toBeCalled()
      })

      it('should call adjustCarousel down onClick if judge is the current player', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={mockCurrent}
          unusedIDs={mockUnusedIDs}
          judge={2}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'adjustCarousel')
        wrapper.setState({ preTurn: false })
        wrapper.find('.adj-down').simulate('click')

        expect(spy).toBeCalled()
      })

      it('should call adjustCarousel up onClick if judge is the current player', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={mockCurrent}
          unusedIDs={mockUnusedIDs}
          judge={2}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'adjustCarousel')
        wrapper.setState({ preTurn: false })
        wrapper.find('.adj-up').simulate('click')

        expect(spy).toBeCalled()
      })

      it('should call selectWinner when a gif is clicked on by the judge', () => {
        const wrapper = shallow(<Selection 
          players={mockPlayers}
          currentPlayer={mockCurrent}
          unusedIDs={mockUnusedIDs}
          judge={2}
          choices={mockChoices}
          usedCaptions={mockUsedCaptions}
          round={mockRound}
          addChoice={mockAddChoice}
          setCurrentPlayer={mockSetCurrent}
          updatePlayerGifs={mockUpdateGifs}
          drawNewGifThunk={mockDrawNew}
          selectWinner={mockSelectWinner}
          changeJudge={mockChangeJudge}
          clearChoices={mockClearChocies}
          setCaption={mockSetCaption}
          nextRound={mockNextRound}
        />)
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'selectWinner')
        wrapper.setState({ preTurn: false })
        wrapper.find('.gif').first().simulate('click')

        expect(spy).toBeCalled()
      })

      it('should call selectGif when a gif is click on by a player', () => {
        const instance = wrapper.instance()
        const spy = spyOn(instance, 'selectGif')
        wrapper.setState({ preTurn: false })
        wrapper.find('.gif').first().simulate('click')

        expect(spy).toBeCalled()
      })
    })
  })

  describe('mapStateToProps', () => {
    it('should return a props object with the correct data from state', () => {
      const mockState = {
        players: [{ player: 1, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 2, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 3, score: 0, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }],
        currentPlayer: 2,
        unusedIDs: ['123', '234', '345'],
        judge: 1,
        choices: [{ gif: 'Test1.gif', player: 2 }, { gif: 'Test2.gif', player: 3 }],
        caption: ['Test1', 'Test2'],
        round: 2,
        error: ''
      }

      const expected = {
        players: [{ player: 1, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 2, score: 100, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }, { player: 3, score: 0, gifs: [{images: { fixed_width: {url: 'Testurl'} } }] }],
        currentPlayer: 2,
        unusedIDs: ['123', '234', '345'],
        judge: 1,
        choices: [{ gif: 'Test1.gif', player: 2 }, { gif: 'Test2.gif', player: 3 }],
        usedCaptions: ['Test1', 'Test2'],
        round: 2
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch
    let mappedProps

    beforeEach(() => {
      mockDispatch = jest.fn()
      mappedProps = mapDispatchToProps(mockDispatch)
    })

    it('should dispatch addChoice when addChoice is called', () => {
      const expected = addChoice()

      mappedProps.addChoice()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setCurrentPlayer when addChoice is called', () => {
      const expected = setCurrentPlayer()

      mappedProps.setCurrentPlayer()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch updatePlayerGifs when addChoice is called', () => {
      const expected = updatePlayerGifs()

      mappedProps.updatePlayerGifs()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch drawNewGifThunk when addChoice is called', () => {
      const expected = drawNewGifThunk()

      mappedProps.drawNewGifThunk()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch selectWinner when addChoice is called', () => {
      const expected = selectWinner()

      mappedProps.selectWinner()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch changeJudge when addChoice is called', () => {
      const expected = changeJudge()

      mappedProps.changeJudge()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch clearChoices when addChoice is called', () => {
      const expected = clearChoices()

      mappedProps.clearChoices()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch setCaption when addChoice is called', () => {
      const expected = setCaption()

      mappedProps.setCaption()

      expect(mockDispatch).toBeCalledWith(expected)
    })

    it('should dispatch nextRound when addChoice is called', () => {
      const expected = nextRound()

      mappedProps.nextRound()

      expect(mockDispatch).toBeCalledWith(expected)
    })
  })
})