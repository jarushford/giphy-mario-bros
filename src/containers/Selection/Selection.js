import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addChoice, setCurrentPlayer, updatePlayerGifs, selectWinner, changeJudge, clearChoices, setCaption } from '../../actions'
import { captionHelper } from '../../utils/captions'
import { drawNewGifThunk } from '../../thunks/drawNewGif'
import { uid } from 'react-uid';

export class Selection extends Component {
  constructor() {
    super()
    this.state = {
      adjustment: 0,
      preTurn: true
    }
  }

  adjustCarousel = (adj) => {
    const { adjustment}  = this.state
    if (adjustment < 4 && adj === 1) {
      this.setState({ adjustment: this.state.adjustment + adj })
    } else if (adjustment > 0 && adj === -1) {
      this.setState({ adjustment: this.state.adjustment + adj })
    }
  }

  startTurn = () => {
    this.setState({ preTurn: false })
  }

  selectGif = (url) => {
    const { currentPlayer, addChoice, updatePlayerGifs, unusedIDs, drawNewGifThunk } = this.props
    addChoice({
      gif: url,
      player: currentPlayer
    })
    updatePlayerGifs({ url, player: currentPlayer - 1 })
    drawNewGifThunk(currentPlayer, unusedIDs)
    this.changePlayer()
    this.setState({ preTurn: true, adjustment: 0 })
  }

  changePlayer = () => {
    const { players, currentPlayer, setCurrentPlayer } = this.props
    if (currentPlayer + 1 > players.length) {
      setCurrentPlayer(1)
    } else {
      setCurrentPlayer(currentPlayer + 1)
    }
  }

  selectWinner = (player) => {
    const { selectWinner, changeJudge, players, judge, setCurrentPlayer, clearChoices, setCaption, usedCaptions } = this.props
    selectWinner(player)
    changeJudge(players.length)
    clearChoices()
    setCaption(captionHelper(usedCaptions))
    if (judge === players.length) {
      setCurrentPlayer(2)
    } else if (judge === players.length - 1) {
      setCurrentPlayer(1)
    } else {
      setCurrentPlayer(judge + 2)
    }
  }

  render() {
    const { players, currentPlayer, judge, choices } = this.props
    const { adjustment } = this.state
    const style = { transform: `translateX(${adjustment * -290}px)` }

    if (!players.length) {
      return <div />
    }

    let gifs = []
    if (players.length) {
      gifs = players[currentPlayer - 1].gifs.map(gif => {
        return <img
          className="gif"
          src={gif.images.fixed_width.url}
          key={uid(gif)}
          alt=''
          style={style}
          onClick={() => this.selectGif(gif.images.fixed_width.url)}
        />
      })
    }
    
    if (currentPlayer === judge) {
      gifs = choices.map(gif => {
        return <img
          className="gif"
          src={gif.gif}
          key={uid(gif)}
          alt=''
          style={style}
          onClick={() => this.selectWinner(gif.player)}
        />
      })
      return (
        <section className="selection">
          <button onClick={() => this.adjustCarousel(-1)}>
            <i className="fas fa-arrow-left" />
          </button>
          <div className="gifs-container judge-choice">
            {gifs}
          </div>
          <button onClick={() => this.adjustCarousel(1)}>
            <i className="fas fa-arrow-right" />
          </button>
        </section>
      )
    }

    if (this.state.preTurn) {
      return (
        <button
          onClick={this.startTurn}
          className="start-turn"
        >
          Choose GIF
        </button>
      )
    }

    return (
      <section className="selection">
        <button onClick={() => this.adjustCarousel(-1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <div className="gifs-container">
          {gifs}
        </div>
        <button onClick={() => this.adjustCarousel(1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  players: state.players,
  currentPlayer: state.currentPlayer,
  unusedIDs: state.unusedIDs,
  judge: state.judge,
  choices: state.choices,
  usedCaptions: state.caption
})

export const mapDispatchToProps = (dispatch) => ({
  addChoice: (choice) => dispatch(addChoice(choice)),
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  updatePlayerGifs: (url) => dispatch(updatePlayerGifs(url)),
  drawNewGifThunk: (player, IDs) => dispatch(drawNewGifThunk(player, IDs)),
  selectWinner: (player) => dispatch(selectWinner(player)),
  changeJudge: (players) => dispatch(changeJudge(players)),
  clearChoices: () => dispatch(clearChoices()),
  setCaption: (caption) => dispatch(setCaption(caption))
})

export default connect(mapStateToProps, mapDispatchToProps)(Selection)