import styled from 'styled-components'

export const Container = styled.div`
  & svg {
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export const Spin = styled.span`
  .spin{
    position: fixed;
    width: 100px;
    height: 100px;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    background: #dc2d2d;
    z-index: 2;
    border-radius: 5px;
    animation: pulse 2s infinite alternate linear;
  }

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
