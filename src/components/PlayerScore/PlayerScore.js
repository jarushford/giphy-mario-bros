import React from 'react'

export default function PlayerScore({ player, score }) {
  return (
    <div className="player-score-container">
      <p className="player-score">P{player}:</p>
      <div className="coin"/>
      <p className="player-score">{score}</p>
    </div>
  )
}