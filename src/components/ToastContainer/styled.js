import styled, { css } from 'styled-components'
import theme from '../../theme'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

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
  top: 0px;
  left: 0px;
`

export const R = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  ${(props) => {
    switch (props.positionToast) {
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
`
