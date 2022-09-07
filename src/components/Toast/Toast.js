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
  R,
} from './styled'

const Toast = ({
  theme,
  deleteToast,
  type,
  id,
  position,
  forwardedRef,
}) => {
  return (
    <Container
      ref={forwardedRef}
      backgroundColor={theme}
      positionToast={position}>
      <Wrapper>
        {typeImg[type]}
        <Title>{typeInfo[type]}</Title>
      </Wrapper>
      <CloseImg src={close} onClick={deleteToast(id)} />
    </Container>
  )
}

Toast.propTypes = {
  theme: PropTypes.string,
  deleteToast: PropTypes.func,
  type: PropTypes.string,
}

export default Toast
