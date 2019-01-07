import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addChoice, setCurrentPlayer, updatePlayerGifs, selectWinner, changeJudge, clearChoices, setCaption, nextRound } from '../../actions'
import { captionHelper } from '../../utils/captions'
import { drawNewGifThunk } from '../../thunks/drawNewGif'
import { uid } from 'react-uid'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export class Selection extends Component {
  constructor() {
    super()
    this.state = {
      adjustment: 0,
      preTurn: true
    }
  }

  adjustCarousel = (adj) => {
    const { adjustment }  = this.state
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
    const { selectWinner, changeJudge, players, judge, setCurrentPlayer, clearChoices, setCaption, usedCaptions, nextRound } = this.props
    selectWinner(player)
    changeJudge(players.length)
    clearChoices()
    setCaption(captionHelper(usedCaptions))
    nextRound()
    if (judge === players.length) {
      setCurrentPlayer(2)
    } else if (judge === players.length - 1) {
      setCurrentPlayer(1)
    } else {
      setCurrentPlayer(judge + 2)
    }
  }

  render() {
    const { players, currentPlayer, judge, choices, round } = this.props
    const { adjustment } = this.state
    const style = { transform: `translateX(${adjustment * -290}px)` }
    let gifs = []

    if (!players.length) {
      return <div />
    } else {
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
    
    if (round === players.length * 2 + 1) {
      return <Redirect to="/newgame" />
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
          <button className="adj-down" onClick={() => this.adjustCarousel(-1)}>
            <i className="fas fa-arrow-left" />
          </button>
          <div className="gifs-container judge-choice">
            {gifs}
          </div>
          <button className="adj-up" onClick={() => this.adjustCarousel(1)}>
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
        <button className="adj-down" onClick={() => this.adjustCarousel(-1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <div className="gifs-container">
          {gifs}
        </div>
        <button className="adj-up" onClick={() => this.adjustCarousel(1)}>
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
  usedCaptions: state.caption,
  round: state.round
})

export const mapDispatchToProps = (dispatch) => ({
  addChoice: (choice) => dispatch(addChoice(choice)),
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  updatePlayerGifs: (url) => dispatch(updatePlayerGifs(url)),
  drawNewGifThunk: (player, IDs) => dispatch(drawNewGifThunk(player, IDs)),
  selectWinner: (player) => dispatch(selectWinner(player)),
  changeJudge: (players) => dispatch(changeJudge(players)),
  clearChoices: () => dispatch(clearChoices()),
  setCaption: (caption) => dispatch(setCaption(caption)),
  nextRound: () => dispatch(nextRound())
})

export default connect(mapStateToProps, mapDispatchToProps)(Selection)

Selection.propTypes = {
  players: PropTypes.array.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  unusedIDs: PropTypes.array.isRequired,
  judge: PropTypes.number.isRequired,
  choices: PropTypes.array.isRequired,
  usedCaptions: PropTypes.array.isRequired,
  round: PropTypes.number.isRequired,
  addChoice: PropTypes.func.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  updatePlayerGifs: PropTypes.func.isRequired,
  drawNewGifThunk: PropTypes.func.isRequired,
  selectWinner: PropTypes.func.isRequired,
  changeJudge: PropTypes.func.isRequired,
  clearChoices: PropTypes.func.isRequired,
  setCaption: PropTypes.func.isRequired,
  nextRound: PropTypes.func.isRequired
}