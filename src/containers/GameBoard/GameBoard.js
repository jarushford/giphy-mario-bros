import React from 'react'
import Loading from '../Loading/Loading'
import PlayerScore from '../../components/PlayerScore/PlayerScore'
import { connect } from 'react-redux'
import { uid } from 'react-uid';
import '../../main.scss'

export function GameBoard({ players }) {
  if (!players.length) {
    return <Loading />
  }

  const scores = players.map(player => {
    return <PlayerScore {...player} key={uid(player)} />
  })

  return (
    <section className="game-board">
      <h1 className="title">Giphy Mario Bros.</h1>
      <div className="player-scores">{scores}</div>
      <h3>This is an example caption. Yay!</h3>
      <h2>This is whose turn it is!</h2>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  players: state.players
})

export default connect(mapStateToProps)(GameBoard)