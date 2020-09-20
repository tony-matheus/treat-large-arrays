import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from "./styles";

export const Button = ({
  isLoading,
  outlined,
  isDisabled,
  children,
  onClick,
  wide,
  theme,
  ...restProps
}) => {
  const currentChild = isLoading
    ? 'Loading...'
    : children

  return (
    <ButtonStyled
      {...restProps}
      isLoading={isLoading}
      outlined={outlined}
      theme={theme}
      wide={wide}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      {currentChild}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  children: 'Botão',
  theme: 'primary',
  wide: false,
  isDisabled: false,
  isLoading: false
}

Button.propTypes = {
  isDisabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  wide: PropTypes.bool,
  theme: PropTypes.oneOf(['primary', 'secondary']),
  outlined: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
}
