import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome'
import SelectPlayers from '../SelectPlayers/SelectPlayers';
import GameBoard from '../GameBoard/GameBoard'
import '../../main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Welcome} />
        <Route exact path='/select-players' component={SelectPlayers} />
        <Route path='/home' component={GameBoard} />
      </div>
    )
  }
}

export default App
