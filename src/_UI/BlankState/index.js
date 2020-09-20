import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Title
} from './styles'

export const BlankState = ({ title }) => {
  return (
    <Container>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <Title>
        {title}
      </Title>
    </Container>
  )
}

BlankState.defaultProps = {
  title: 'Algum titulo'
}

BlankState.propTypes = {
  title: PropTypes.string
}


