import styled from 'styled-components';
import colors from '../../utils/colors';
import { prettyScrollBar } from '../../_UI/PrettyScrollBar'

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  height: calc(100% - 252px);
  margin: 70px auto 0 auto;
  padding: 10px;
  background: ${colors.ui.base};
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);

  &:last-child {
    z-index: 50;
  }

  & * {
    ${prettyScrollBar}
    outline: none;
  }

  @media (max-width: 800px) {
    height: calc(100% - 160px);
    margin: 0;
    border-radius: 0%;
    padding: 40px 10px 0 10px;
    background: ${colors.ui.base};
  }
`;

export const ListWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #E6E6F0;
  box-sizing: border-box;
  border-radius: 8px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 252px);
`

export const NumberBlock = styled.div`
  padding: 8px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  background: ${colors.ui.base};
  top: -56px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0px -4px 8px 1px rgba(32,33,36,0.28);

  @media (max-width: 800px) {
    top: 6px;
    height: 20px;
    line-height: 20px;
  }
`
