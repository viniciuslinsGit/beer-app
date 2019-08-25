import React from 'react'
import { Switch , Route } from 'react-router-dom'
import BeerList from './Beer/BeerList'

const RenderBeers = () => (
  <Switch>
    <Route exact path='/' component={BeerList} />
  </Switch>
)

export default RenderBeers