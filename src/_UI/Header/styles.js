import styled from 'styled-components'
import colors from '../../utils/colors'

export const HeaderStyled = styled.div`
  width: 100%;
  min-height: 200px;
  position: relative;
  background: ${colors.negative.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    min-height: 160px;
  }
`

export const HeaderBar = styled.div`
  padding: 20px;
  display: flex;
  background: ${colors.negative.darker};
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    padding: 10px;
  }
`

export const Title = styled.span`
  color: ${colors.negative.light};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 800px) {
  font-size: 16px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.negative.light};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  &:hover, &:focus {
    text-decoration: none !important;
  }
`
