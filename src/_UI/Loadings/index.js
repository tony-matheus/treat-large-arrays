import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Container } from './styles'

export const Loading = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faSpinner} />
    </Container>
  )
}
