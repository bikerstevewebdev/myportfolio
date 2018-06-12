import React, { Component } from 'react'
import Template from './layouts'
// import { Route } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import PropTypes from 'prop-types'


class App extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }
  
  render() {
    return (
      <div className="App">
        <Template />
      </div>
    )
  }
}

export default App
