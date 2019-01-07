import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome'
import SelectPlayers from '../SelectPlayers/SelectPlayers'
import GameBoard from '../GameBoard/GameBoard'
import Selection from '../Selection/Selection'
import Round from '../Round/Round'
import NewGame from '../NewGame/NewGame'
import Error from '../Error/Error'
import '../../main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/select-players' component={SelectPlayers} />
          <Route exact path='/home' render={() => {
            return (
              <div>
                <Round />
                <Link to='/'><button className="home">Home</button></Link>
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

export default App
