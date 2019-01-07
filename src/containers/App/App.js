import React, { Component } from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { clearPlayers, clearChoices, setCurrentPlayer, setJudge, setUnusedIDs } from '../../actions';
import PropTypes from 'prop-types'
import Welcome from '../../components/Welcome/Welcome'
import SelectPlayers from '../SelectPlayers/SelectPlayers'
import GameBoard from '../GameBoard/GameBoard'
import Selection from '../Selection/Selection'
import Round from '../Round/Round'
import NewGame from '../NewGame/NewGame'
import Error from '../Error/Error'
import { connect } from 'react-redux'
import '../../main.scss'

export class App extends Component {
  render() {
    if (this.props.error) {
      return <div className="App">
        <Error />
      </div>
    }

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/select-players' component={SelectPlayers} />
          <Route exact path='/home' render={() => {
            return (
              <div>
                <Round />
                <Link 
                  to='/'
                  className="Home-Link"
                  onClick={() => {
                    this.props.clearPlayers()
                    this.props.clearChoices()
                    this.props.setCurrentPlayer(2)
                    this.props.setJudge()
                    this.props.setUnusedIDs([])
                  }}><button className="home"><i className="fa fa-home"/></button></Link>
                <GameBoard />
                <Selection />
              </div>
            )
          }} />
          <Route exact path='/newgame' component={NewGame} />
          <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  clearPlayers: () => dispatch(clearPlayers()),
  clearChoices: () => dispatch(clearChoices()),
  setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
  setJudge: () => dispatch(setJudge()),
  setUnusedIDs: (IDs) => dispatch(setUnusedIDs(IDs))
})

export default withRouter(connect(mapStateToProps)(App))

NewGame.propTypes = {
  error: PropTypes.array.isRequired,
  clearPlayers: PropTypes.func.isRequired,
  clearChoices: PropTypes.func.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setJudge: PropTypes.func.isRequired,
  setUnusedIDs: PropTypes.func.isRequired
}