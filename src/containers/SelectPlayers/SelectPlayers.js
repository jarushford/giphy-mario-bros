import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { setPlayersThunk } from '../../thunks/setPlayers'
import { setCaption } from '../../actions'
import { captionHelper } from '../../utils/captions'
import '../../main.scss'

export function SelectPlayers({ setPlayers, usedCaptions, setCaption }) {
  return (
    <section className="players">
      <h1 className="title">Giphy Mario Bros.</h1>
      <Link to='/home' onClick={() => {
        setPlayers(3)
        setCaption(captionHelper(usedCaptions))
      }}>
        <button className="three-btn">
          3 Players
        </button>
      </Link>
      <Link to='/home' onClick={() => {
        setPlayers(4)
        setCaption(captionHelper(usedCaptions))
      }}>
        <button className="four-btn">
          4 Players
        </button>
      </Link>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  usedCaptions: state.caption
})

export const mapDispatchToProps = (dispatch) => ({
  setPlayers: (players) => dispatch(setPlayersThunk(players)),
  setCaption: (caption) => dispatch(setCaption(caption))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayers)