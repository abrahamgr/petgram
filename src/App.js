import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Context } from './Context'
import { Logo } from './components/logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Navbar } from './components/navbar'
import { NotRegistered } from './pages/NotRegistered'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'

// loads js files on demand for specific components
// Suspsnese is a wrapper required in order to use React.lazy
const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegistered path='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  )
}
