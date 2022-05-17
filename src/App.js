import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'
import { PhotocardWithQuery } from './container/PhotocardWithQuery'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new URLSearchParams(location.search) // eslint-disable-line no-undef

  const detailId = urlParams.get('detailId')

  return (
    <>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotocardWithQuery detailId={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
            )
      }
    </>
  )
}
