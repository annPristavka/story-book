import styled from 'styled-components'
import theme from '../../theme'

export const ContainerSettings = styled.div`
  width: 100%;
  max-width: ${theme.length[7]}px;
  min-height: ${theme.length[6]}px;
  background-color: ${theme.colors.MediumSlateBlue};
  border: ${theme.border[0]}px solid ${theme.colors.whiteOt};
  border-radius: ${theme.borderRadius[2]}px;
  margin: auto;
  z-index: ${theme.zIndex[0]};
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: auto;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Title = styled.p`
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[3]}px;
  padding: 0px ${theme.padding[4]}px;
`
