import React, {
  useLayoutEffect,
  useState,
  useImperativeHandle,
  useCallback,
  useEffect,
} from 'react'
import { useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import Toast from '../Toast'
import { positionInfo } from '../../constants'
import { SirviceSingleton } from '../../utils/ServiceSingleton'

import { Wrapper } from './styled'

const ToastContainer = React.forwardRef((props, ref) => {
  const [documentPortal, _] = useState(document.body)
  const [position, setPosition] = useState('')
  const [toastProps, setToastProps] = useState({})

  useImperativeHandle(
    ref,
    () => ({
      add: addHandleToast,
      delete: deleteHandleToast,
    }),
    [],
  )

  const addHandleToast = useCallback(
    (newToast) => {
      setPosition(newToast.position)
      setToastProps(newToast)
      setTimeout(function () {                     // проверка времени показа
        SirviceSingleton.deleteToast(toastProps.id)
      }, 3000)
    },
    [toastProps],
  )

  const deleteHandleToast = (idToast) => {
    SirviceSingleton.deleteToast(toastProps.id)
  }

  return ReactDOM.createPortal(
    <Wrapper positionInfo={position}>
      {props.toasts.map((toast) => (
        <Toast
          {...toastProps}
          key={toast.id}
          forwardedRef={ref}
          onClick={deleteHandleToast}
        />
      ))}
    </Wrapper>,
    documentPortal,
  )
})

export default ToastContainer
