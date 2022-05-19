import React, { useState } from 'react'

import { Button, Form, Input, Title, Error } from './styles'

const initialState = {
  email: '',
  password: ''
}

export const UserForm = ({ title, onSubmit, loading, error }) => {

  const [ state , setState ]  = useState(initialState)
  const { email , password } = state

  const onChange = (e) => {
    const { value, name } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
            placeholder="Email" 
            name="email"
            value={email}
            onChange={onChange}
        />
        <Input
            type="password"
            placeholder="Password" 
            name="password"
            value={password}
            onChange={onChange}
        />
        <Button type="submit" disabled={loading}>{title}</Button>
        {error && error?.message && <Error>{error.message}</Error>}
      </Form>
    </>
  )
}
