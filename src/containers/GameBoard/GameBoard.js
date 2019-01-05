import React from 'react'
import Loading from '../Loading/Loading'
import PlayerScore from '../../components/PlayerScore/PlayerScore'
import { connect } from 'react-redux'
import { uid } from 'react-uid';
import '../../main.scss'

export function GameBoard({ players, judge, caption, currentPlayer }) {
  if (!players.length) {
    return <Loading />
  }

  const scores = players.map(player => {
    if (player.player === judge) {
      return <PlayerScore {...player} key={uid(player)} active={true} />
    }
    return <PlayerScore {...player} key={uid(player)} active={false} />
  })

  return (
    <section className="game-board">
      <h1 className="title">Giphy Mario Bros.</h1>
      <div className="player-scores">{scores}</div>
      <h3>{caption[0]}</h3>
      <h2>Player {currentPlayer}, choose a GIF</h2>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  players: state.players,
  judge: state.judge,
  currentPlayer: state.currentPlayer,
  caption: state.caption
})

export default connect(mapStateToProps)(GameBoard)