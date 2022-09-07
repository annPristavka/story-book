import React from 'react'
import PropTypes from 'prop-types'
import { SirviceSingleton } from '../../utils/ServiceSingleton'
import close from '../../assets/close.svg'
import { typeInfo, typeImg } from '../../constants'
import {
  Container,
  Title,
  Icon,
  CloseImg,
  Wrapper,
} from './styled'

const Toast = ({
  theme,
  onClick,
  type,
  forwardedRef,
}) => {
  return (
    <Container backgroundColor={theme} ref={forwardedRef}>
      <Wrapper>
        {typeImg[type]}
        <Title>{typeInfo[type]}</Title>
      </Wrapper>

      <CloseImg src={close} onClick={onClick} />
    </Container>
  )
}

Toast.propTypes = {
  theme: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Toast
