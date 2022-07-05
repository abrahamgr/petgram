import React from 'react'

import PropTypes from 'prop-types'
import { ButtonBase } from './styles'

export const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonBase type='submit' onClick={onClick} disabled={disabled}>{children}</ButtonBase>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}