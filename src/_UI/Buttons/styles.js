import styled from 'styled-components';
import colors from '../../utils/colors';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  outline: none;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
    background-color: ${colors.white};
    color: ${colors.primary.base};
    border: 2px solid ${colors.primary.base};
  }

  ${({ wide }) => wide && `
    padding: 15px 40px;
  `}

  ${({ theme, outlined }) => {
    if (outlined) {
      switch (theme) {
        case 'primary':
          return `
            background-color: ${colors.white};
            border: 1px solid ${colors.primary.base};
            color: ${colors.primary.base};
          `
        default:
          break;
      }
    }
    switch (theme) {
      case 'primary':
        return `
          background-color: ${colors.primary.base};
          color: ${colors.white};
        `
      default:
        break;
    }
  }}
`;
