import styled, { css } from 'styled-components'
import theme from '../../theme'

export const Wrapper = styled.div`
  width: ${theme.length[11]}px;
  height: auto;

  ${(props) => {
    switch (props.positionInfo) {
      case 'top-left':
        return css`
          top: 0px;
          left: 0px;
        `

      case 'top-right':
        return css`
          top: 0px;
          right: 0px;
        `

      case 'bottom-left':
        return css`
          bottom: 0px;
          left: 0px;
        `

      case 'bottom-right':
        return css`
          bottom: 0px;
          right: 0px;
        `
    }
  }}
  position: absolute;
  z-index: ${theme.zIndex[2]};
`
