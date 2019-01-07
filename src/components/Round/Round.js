import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../main.scss'

export function Round({ round, players }) {
  if (!players.length) {
    return <div />
  }

  return (
    <div className="round">
      <h3 className="round-num">{round + 1}</h3>
      <h3 className="round-sep">/</h3>
      <h3 className="round-total">{players.length * 2 + 1}</h3>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  round: state.round,
  players: state.players
})

export default connect(mapStateToProps)(Round)

Round.propTypes = {
  round: PropTypes.number.isRequired,
  players: PropTypes.array.isRequired
}