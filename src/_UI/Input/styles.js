import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

const getSize = (size) => {
  switch (size) {
    case 'small':
      return css `
        font-size: 12px;
        padding: 8px;
      `
    case 'medium':
      return css `
        font-size: 12px;
        padding: 16px;

        @media (max-width: 800px) {
          font-size: 14px;
          padding: 14px;
        }
      `
    case 'large':
      return css `
        font-size: 14px;
        padding: 24px;

        @media (max-width: 800px) {
          font-size: 14px;
          padding: 20px;
        }
      `
    default:
      return css `
        font-size: 14px;
        padding: 24px;
      `
  }
}

export const InputStyled = styled.input`
  outline: none;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin: 0;
  display: inline-block;
  min-width: 0;
  color: rgba(0,0,0,.85);
  font-size: 14px;
  background-color: ${colors.ui.base};
  background-image: none;
  border: 1px solid ${colors.ui.dark};
  border-radius: 2px;
  position: relative;
  transition: all .3s;
  padding: 24px 24px;

  &:focus {
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }

  &::placeholder {
    color: ${colors.text.placeholder};
  }
`;

