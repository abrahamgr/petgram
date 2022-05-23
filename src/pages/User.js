import React, { useContext } from 'react'
import { navigate } from '@reach/router'
import { Context } from '../Context'

import { Button } from '../components/submit-button'

export const User = () => {

  const { removeAuth } = useContext(Context)

  const handleClick = (e) => {
    e.preventDefault()
    removeAuth()
    navigate('/')
  }

  return (
    <>
      <h2>User</h2>
      <Button onClick={handleClick}>Sign out</Button>
    </>
  )
}
