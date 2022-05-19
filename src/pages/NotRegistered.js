import React, { useContext, useState } from 'react'
import { gql, useMutation } from '@apollo/client'

import { Context } from '../Context'
import { UserForm } from '../components/userform'

const registerQuery = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`,
loginQuery = gql`
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
      response.data.signup
      console.log(response)
      activateAuth()
    })
    .catch(console.error)
  }

  const handleIsRegister = () => {
    setRegister(!isRegister)
  }

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      {
        isRegister
        ? <>
            <UserForm key='register' title='Register' onSubmit={handleSubmit} error={signupError} loading={signupLoading} />
            <p>Already have an account? Please login <label onClick={handleIsRegister}>here</label></p>
          </>
        : <>
            <UserForm key='login' title='Log in' onSubmit={handleSubmit} error={logInError} loading={logInLoading} />
            <p>Dont have an account? Please register <label onClick={handleIsRegister}>here</label></p>
          </>
      }
    </div>
  )
}
