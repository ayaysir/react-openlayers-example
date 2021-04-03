import React from 'react'
import { Route } from 'react-router'
import MainPage from './pages/MainPage'

function App () {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={MainPage} path="/:menu" />
    </>
  )
}

export default App
