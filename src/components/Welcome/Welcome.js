import React from 'react'
import { Link } from 'react-router-dom'
import '../../main.scss'

export default function Welcome() {
  return (
    <section className="welcome">
      <h1 className="title">Giphy Mario Bros.</h1>
      <p className="instructions">To play this game, select your number of players. On each players turn they will be given a caption. Every other player must choose a GIF to match that caption when they are prompted to do so. Once everyone has chosen, the player whose turn it is will choose their favorite and that player will be awarded coins. Then it will move to the next player. The game starts with Player 1!</p>
      <Link to='/select-players'>
        <button className="start-btn">Start</button>
      </Link>
    </section>
  )
}
