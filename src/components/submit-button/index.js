import React from 'react'
import { ButtonBase } from './styles'

export const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonBase type='submit' onClick={onClick} disabled={disabled}>{children}</ButtonBase>
  )
}