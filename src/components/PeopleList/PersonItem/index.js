import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../../_UI/Avatar'
import {
  Container,
  Wrapper,
  InfoWrapper,
  Title,
  Subtitle
} from './styles'

export const PersonItem = ({ id, name, age }) => {
  return (
    <Container>
      <Wrapper>
        <Avatar
          size='large'
          letter={name[0]}
        />
        <InfoWrapper>
          <Title>{name}</Title>
          <Subtitle>{age} {age > 1 ? 'anos' : 'ano'}</Subtitle>
        </InfoWrapper>
      </Wrapper>
      <Title>{id + 1}</Title>
    </Container>
  )
}

PersonItem.defaultProps = {
  name: 'Tony Matheus',
  age: '22 anos'
}

PersonItem.propTypes = {
  name: PropTypes.string,
  age: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

