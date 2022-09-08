import React, {
  useCallback,
  useState,
  useEffect,
} from 'react'
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
  type,
  id,
  position,
  deleteToast,
  toasts,
  // count,
}) => {

  return (
    <Container
      backgroundColor={theme}
      // count={count}
      positionToast={position}>
      <Wrapper>
        {typeImg[type]}
        <Title>{typeInfo[type]}</Title>
      </Wrapper>
      <CloseImg
        src={close}
        onClick={deleteToast(id)}
      />
    </Container>
  )
}

Toast.propTypes = {
  theme: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  deleteToast: PropTypes.func,
}

export default Toast
