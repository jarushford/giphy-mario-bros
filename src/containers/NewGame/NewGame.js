import React from 'react'
import { connect } from 'react-redux'
import { clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs } from '../../actions';
import { Link } from 'react-router-dom'

export function NewGame({ players, clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs }) {
  const finalScores = players.map(player => {
    return (
      <h3>Player {player.player}: {player.score}</h3>
    )
  })

  return (
    <section>
      <h1>Final Scores</h1>
      <div className="scores-container">
        {finalScores}
      </div>
      <Link
        to='/select-players'
        onClick={() => {
          clearPlayers()
          clearChoices()
          setCurrentPlayer(2)
          setJudge()
          setUnusedIDs([])
        }}
      >
        <button>New Game</button>
      </Link>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  players: state.players
})

export const mapDispatchToProps = (dispatch) => ({
  clearPlayers: () => dispatch(clearPlayers()),
  clearChoices: () => dispatch(clearChoices()),
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  setJudge: () => dispatch(setJudge()),
  setUnusedIDs: (IDs) => dispatch(setUnusedIDs(IDs))
})

export default connect(mapStateToProps)(NewGame)