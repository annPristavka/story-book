import React from 'react'
import { WrapperButton } from './styled'

const Button = ({ children, onClick }) => {
  return (
    <WrapperButton onClick={onClick}>
      {children}
    </WrapperButton>
  )
}

export default Button
