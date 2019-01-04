import React, { Component } from 'react'
import { connect } from 'react-redux'
import { uid } from 'react-uid';

export class Selection extends Component {
  constructor() {
    super()
    this.state = {
      adjustment: 0
    }
  }

  adjustCarousel = (adj) => {
    const { adjustment}  = this.state
    if (adjustment < 4 && adj === 1) {
      this.setState({ adjustment: this.state.adjustment + adj })
    } else if (adjustment > 0 && adj === -1) {
      this.setState({ adjustment: this.state.adjustment + adj })
    }
  }

  render() {
    const { players, currentPlayer } = this.props
    const { adjustment } = this.state
    const style = { transform: `translateX(${adjustment * -290}px)` }
    let gifs = []
    if (players.length) {
      gifs = players[currentPlayer].gifs.map(gif => {
        return <img
          className="gif"
          src={gif.images.fixed_width.url}
          key={uid(gif)}
          alt=''
          style={style}  
        />
      })
    }

    return (
      <section className="selection">
        <button onClick={() => this.adjustCarousel(-1)}>
          <i class="fas fa-arrow-left" />
        </button>
        <div className="gifs-container">
          {gifs}
        </div>
        <button onClick={() => this.adjustCarousel(1)}>
          <i class="fas fa-arrow-right" />
        </button>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  players: state.players,
  currentPlayer: state.currentPlayer
})

export default connect(mapStateToProps)(Selection)