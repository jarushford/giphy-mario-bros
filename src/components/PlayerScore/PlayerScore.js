import React from 'react'
import PropTypes from 'prop-types'

export default function PlayerScore({ player, score, active }) {
  return (
    <div className={`player-score-container ${active && 'active'}`}>
      <p className="player-score player-name">P{player}:</p>
      <div className="coin"/>
      <p className="player-score">{score}</p>
    </div>
  )
}

PlayerScore.propTypes = {
  player: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
}