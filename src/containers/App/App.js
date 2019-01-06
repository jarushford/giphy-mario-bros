import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome'
import SelectPlayers from '../SelectPlayers/SelectPlayers'
import GameBoard from '../GameBoard/GameBoard'
import Selection from '../Selection/Selection'
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
                <GameBoard />
                <Selection />
              </div>
            )
          }} />
          <Route path='/newgame' render={() => <div>sdfsd</div>} />
          {/* <Route component={Error}/> */}
        </Switch>
      </div>
    )
  }
}

export default App
