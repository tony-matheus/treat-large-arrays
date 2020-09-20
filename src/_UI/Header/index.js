import React from 'react'
import {
  HeaderStyled,
  Title,
  Link,
  HeaderBar
} from './styles'

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <HeaderBar>
        <Title>
          Author: Tony Matheus
        </Title>
        <Link href='https://github.com/tony-matheus' target='_blank'>
          GitHub
        </Link>
      </HeaderBar>
      {children}
    </HeaderStyled>
  )
}
