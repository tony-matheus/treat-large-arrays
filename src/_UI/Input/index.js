import React from 'react'
import { InputStyled } from './styles'

export const Input = ({ placeholder, isDisabled, ...restProps }) => {

  return (
    <InputStyled
      {...restProps}
      placeholder={placeholder}
      disabled={isDisabled}
    />
  )
}

