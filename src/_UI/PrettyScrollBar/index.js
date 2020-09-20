import { css } from 'styled-components'
import colors from '../../utils/colors'

export const prettyScrollBar = css`
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-clip: padding-box;
    background-color: ${colors.ui.darker};
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`
