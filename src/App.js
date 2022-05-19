import React, { useContext } from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './styles/GlobalStyles'
import { Context } from './Context'
import { Logo } from './components/logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Navbar } from './components/navbar'
import { NotRegistered } from './pages/NotRegistered'
import { Favs } from './pages/Favs'
import { User } from './pages/User'

const UserLogged = ({ children }) => {
  const { isAuth } = useContext(Context)
  return children({ isAuth })
}

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
      <UserLogged>
        {
          ({ isAuth }) => (
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                )
              : (
                <Router>
                  <NotRegistered path='/favs' />
                  <NotRegistered path='/user' />
                </Router>
                )
          )
        }
      </UserLogged>
      <Navbar />
    </>
  )
}
