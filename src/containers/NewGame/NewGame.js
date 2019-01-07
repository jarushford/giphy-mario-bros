import React from 'react'
import { connect } from 'react-redux'
import { clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs } from '../../actions';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { uid } from 'react-uid'

export function NewGame({ players, clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs }) {
  const finalScores = players.map(player => {
    return (
      <h3 key={uid(player)}>Player {player.player}: {player.score}</h3>
    )
  })

  return (
    <section className="final-screen">
      <h1 className="final-scores">Final Scores</h1>
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
        <button className="new-game">New Game</button>
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

NewGame.propTypes = {
  players: PropTypes.array.isRequired,
  clearPlayers: PropTypes.func.isRequired,
  clearChoices: PropTypes.func.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setJudge: PropTypes.func.isRequired,
  setUnusedIDs: PropTypes.func.isRequired
}