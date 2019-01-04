import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uid } from 'react-uid';

export class Selection extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    const { players, currentPlayer } = this.props
    let gifs = []
    if (players.length) {
      gifs = players[currentPlayer].gifs.map(gif => {
        return <img src={gif.images.fixed_width.url} key={uid(gif)} />
      })
    }

    return (
      <section className="selection">
        {gifs}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  players: state.players,
  currentPlayer: state.currentPlayer
})

export default connect(mapStateToProps)(Selection)