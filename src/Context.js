import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.localStorage.getItem('token')
  })
  const value = {
    isAuth,
    activateAuth: (token) => {
      // console.log('token', token)
      window.localStorage.setItem('token', token)
      setIsAuth(true)
    },
    removeAuth: () => {      
      window.localStorage.removeItem('token')
      setIsAuth(false)
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
