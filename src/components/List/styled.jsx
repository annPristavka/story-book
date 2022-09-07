import styled from 'styled-components'
import theme from '../../theme'

export const ContainerList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  width: ${theme.length[9]}px;
`

export const ElementList = styled.li`
    width ${theme.length[10]}px;
    margin: ${theme.margin[1]}px ${theme.margin[1]}px;
    cursor: pounter;
    border: ${theme.border[0]}px solid ${theme.colors.brownOttenok};
    border-radius: ${theme.borderRadius[1]}px;
    font-family: ${theme.font2};
    &:hover {
      transition: all ${theme.transition[0]}s;
      box-shadow: ${theme.boxShadow[0]};
      cursor: pointer;
      border: ${theme.border[0]}px solid ${theme.colors.brown};
    }
`

export const RadioButton = styled.input`
  cursor: pounter;
`

export const LabelRadio = styled.label`
  cursor: pointer;
`
