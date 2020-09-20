import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    font-size: 40px;
    color: ${colors.negative.dark};
  }

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Title = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.text.base};
`
