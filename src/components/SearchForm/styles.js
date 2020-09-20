import styled from 'styled-components'
import colors from '../../utils/colors'
import { InputStyled } from '../../_UI/Input/styles'

export const Container = styled.div`
  position: absolute;
  bottom: -37px;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  width: -webkit-fill-available;

  @media (max-width: 400px) {
    padding: 0;
    bottom: 10px;
  }
`

export const Wrapper = styled.div`
  padding: 10px;
  max-width: 400px;
  width: -webkit-fill-available;

  @media (max-width: 400px) {
    padding: 0 20px;
  }
  & ${InputStyled} {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.span`
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.negative.lightest};
`
