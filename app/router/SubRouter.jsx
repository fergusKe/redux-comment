import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from '../containers/Home'
import NotFound from '../containers/404'

export default class SubRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    )
  }
}