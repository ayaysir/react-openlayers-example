import React from 'react'
import { Route, Switch } from 'react-router'
import MainPage from './pages/MainPage'

function App () {
  return (
    <>
      {/* 지도 새로고침 안되게 */}
      <Switch>
        <Route component={MainPage} path="/:menu" />
        <Route component={MainPage} path="/" exact />
      </Switch>
    </>
  )
}

export default App
