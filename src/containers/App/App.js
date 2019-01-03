import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Welcome from '../../components/Welcome/Welcome'
import '../../main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Welcome} />
      </div>
    )
  }
}

export default App
