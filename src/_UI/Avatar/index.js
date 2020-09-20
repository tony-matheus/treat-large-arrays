import React from 'react'
import PropTypes from 'prop-types'
import { Img, Wrapper } from './styles'

const Avatar = ({ size, url, hasImage, letter }) => {
  if (hasImage)
    return (
      <Img
        src={url}
        size={size}
      />
    )

  return (
    <Wrapper>
      {letter}
    </Wrapper>
  )
}

Avatar.defaultProps = {
  size: 'medium',
  url: 'https://thispersondoesnotexist.com/image',
  hasImage: false,
  letter: 'A'
}

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge']),
  url: PropTypes.string,
  letter: PropTypes.string,
  hasImage: PropTypes.bool
}

export default Avatar
