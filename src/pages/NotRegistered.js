import React, { useContext, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import { Context } from '../Context'
import { UserForm } from '../components/userform'

const registerQuery = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
const loginQuery = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const NotRegistered = () => {
  const { activateAuth } = useContext(Context)
  const [isRegister, setRegister] = useState(true)
  const [signUp, { loading: signupLoading, error: signupError }] = useMutation(registerQuery)
  const [logIn, { loading: logInLoading, error: logInError }] = useMutation(loginQuery)

  const handleSubmit = (userData) => {
    const variables = { input: userData }
    const promise = isRegister ? signUp({ variables }) : logIn({ variables })
    promise.then((response) => {
      // get get token
      const { data } = response
      activateAuth(isRegister ? data.signup : data.login)
    })
      .catch(console.error)
  }

  const handleIsRegister = (e) => {
    e.preventDefault()
    setRegister(!isRegister)
  }

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      {
        isRegister
          ? (
            <>
              <UserForm key='register' title='Register' onSubmit={handleSubmit} error={signupError} loading={signupLoading} />
              <p>Already have an account? Please login <a href='' onClick={handleIsRegister}>here</a></p>
            </>
            )
          : (
            <>
              <UserForm key='login' title='Log in' onSubmit={handleSubmit} error={logInError} loading={logInLoading} />
              <p>Dont have an account? Please register <a href='' onClick={handleIsRegister}>here</a></p>
            </>
            )
      }
    </div>
  )
}
