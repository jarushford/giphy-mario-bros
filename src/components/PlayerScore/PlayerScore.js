import React from 'react'

export default function PlayerScore({ player, score, active }) {
  return (
    <div className={`player-score-container ${active && 'active'}`}>
      <p className="player-score player-name">P{player}:</p>
      <div className="coin"/>
      <p className="player-score">{score}</p>
    </div>
  )
}