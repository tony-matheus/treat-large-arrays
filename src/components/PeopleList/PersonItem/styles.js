import styled from 'styled-components'
import colors from '../../../utils/colors'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid ${colors.ui.light};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  & > *:not(:last-child){
    margin-right: 16px;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-between;
`

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.text.base};

  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 26px;
  }
`


export const Subtitle = styled(Title)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.text.base};

  @media (max-width: 700px) {
    font-size: 12px;
    line-height: 26px;
  }
`
