import * as React from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(item => (
          <Route
            exact
            key={item.path}
            path={item.path}
            component={item.component}
          />
        ))}
        <Redirect to='/'></Redirect>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
