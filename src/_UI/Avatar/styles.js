import styled, { css } from 'styled-components';
import colors from '../../utils/colors';


const getSize = (size) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 12px;
        width: 24px;
        height: 24px;
        line-height: 24px;
      `
    case 'medium':
      return css`
        font-size: 16px;
        width: 32px;
        height: 32px;
        line-height: 32px;
      `
    case 'large':
      return css`
        font-size: 24px;
        width: 40px;
        height: 40px;
        line-height: 40px;
      `
    case 'extraLarge':
      return css`
        font-size: 40px;
        width: 80px;
        height: 80px;
        line-height: 80px;
      `
    default:
      return css`
        font-size: 16px;
        width: 32px;
        height: 32px;
        line-height: 32px;
      `
  }
}

export const Img = styled.img`
  border-radius: 100%;
  border: 2px solid ${colors.primary.base};

  ${({ size }) => getSize(size)}
`;

export const Wrapper = styled.div`
  border: 1px solid ${colors.ui.dark};
  font-size: 1.5em;
  display: inline-block;
  text-align: center;
  border-radius: 100%;
  background-color: #${Math.floor(Math.random() * 16777215).toString(16)};

  ${({ size }) => getSize(size)}
`
