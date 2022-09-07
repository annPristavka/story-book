import React, { useEffect, useRef } from 'react'
import ToastContainer from './ToastContainer/ToastContainer'
import { SirviceSingleton } from '../utils/ServiceSingleton'

const ToastProvider = (props) => {
  const ref = useRef(null)

  const toasts = SirviceSingleton.showHistory()

  useEffect(() => {
    SirviceSingleton.refElement(ref.current)
  }, [toasts])


  return (
    <ToastContainer ref={ref} {...props}  />
  )
}

export default ToastProvider
