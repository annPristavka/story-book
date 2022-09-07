import styled from 'styled-components'
import theme from '../../theme'

export const Container = styled.div`
  max-width: ${theme.length[1]}px;
  width: 100%;
  height: ${theme.length[5]}px;
  background-color: ${props => props.backgroundColor};
  border-radius: ${theme.borderRadius[2]}px;
  color: ${theme.colors.white};
  position: relative;
  margin: ${theme.margin[0]}px;
  z-index: ${theme.zIndex[1]};
`

export const Title = styled.p`
  font-size: ${theme.fontSizes[2]}px;
  font-family: 'Qwitcher Grypen', cursive;
`

export const Icon = styled.img`
  height: ${theme.length[4]}px;
  width: ${theme.length[4]}px;
`

export const CloseImg = styled.img`
  position: absolute;
  top: ${theme.top[0]}px;
  right: ${theme.top[0]}px;
  height: ${theme.length[3]}px;
  width: ${theme.length[3]}px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
`