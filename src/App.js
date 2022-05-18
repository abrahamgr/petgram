import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Navbar } from './components/navbar'

export const App = () => {

  return (
    <>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Navbar />
    </>
  )
}
