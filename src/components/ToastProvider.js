import React, { useLayoutEffect, useRef } from 'react'
import ToastContainer from './ToastContainer/ToastContainer'
import { SirviceSingleton } from '../utils/ServiceSingleton'

const ToastProvider = (props) => {
  const ref = useRef(null)

 //  const toasts = SirviceSingleton.showHistory()

  useLayoutEffect(() => {
    SirviceSingleton.refElement(ref.current)
  }, [])

  return <ToastContainer ref={ref} {...props} />
}

export default ToastProvider
