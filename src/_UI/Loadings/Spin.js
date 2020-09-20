import styled from 'styled-components'
import colors from '../../utils/colors'

export const Spin = styled.span`
  position: fixed;
  width: 50px;
  height: 50px;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  background: ${colors.negative.base};
  z-index: 2;
  border-radius: 5px;
  animation: pulse 2s infinite alternate linear;

  @keyframes pulse {
    from {
      transform: scale(0.7) rotate(0deg);
      border-radius: 50px;
    }

    to {
      transform: scale(2) rotate(360deg);
      border-radius: 50px;
    }
  }

`
