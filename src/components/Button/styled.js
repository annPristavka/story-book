import styled from 'styled-components'
import theme from '../../theme'

export const WrapperButton = styled.button`
  width: ${theme.length[8]}px;
  height: ${theme.length[2]}px;
  background-color: white;
  cursor: pointer;
  transition: box-shadow ${theme.transition[0]}s;
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[11]}px;
  border-radius: ${theme.borderRadius[2]}px;
  border: ${theme.border[0]}px solid
    ${theme.colors.brownOttenok};
  &:hover {
    transition: all ${theme.transition[1]}ms ease;
    box-shadow: ${theme.boxShadow[0]};
  }
`
