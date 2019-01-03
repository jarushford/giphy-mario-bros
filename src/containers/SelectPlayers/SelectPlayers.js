import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setPlayersThunk } from '../../thunks/setPlayers'
import '../../main.scss'

export function SelectPlayers({ setPlayers }) {
  return (
    <section className="players">
      <h1 className="title">Giphy Mario Bros.</h1>
      <Link to='/home' onClick={() => setPlayers(3)}>
        <button className="three-btn">
          3 Players
        </button>
      </Link>
      <Link to='/home' onClick={() => setPlayers(4)}>
        <button className="four-btn">
          4 Players
        </button>
      </Link>
    </section>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  setPlayers: (players) => dispatch((setPlayersThunk(players)))
})

export default connect(null, mapDispatchToProps)(SelectPlayers)