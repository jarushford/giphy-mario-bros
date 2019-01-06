import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome'
import SelectPlayers from '../SelectPlayers/SelectPlayers'
import GameBoard from '../GameBoard/GameBoard'
import Selection from '../Selection/Selection'
import Round from '../../components/Round/Round'
import NewGame from '../NewGame/NewGame'
import '../../main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/select-players' component={SelectPlayers} />
          <Route path='/home' render={() => {
            return (
              <div>
                <Round />
                <GameBoard />
                <Selection />
              </div>
            )
          }} />
          <Route path='/newgame' component={NewGame} />
          {/* <Route component={Error}/> */}
        </Switch>
      </div>
    )
  }
}

export default App
