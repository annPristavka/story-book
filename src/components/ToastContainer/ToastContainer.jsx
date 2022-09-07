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

import { Wrapper, R } from './styled'

const ToastContainer = React.forwardRef((props, ref) => {
  const [documentPortal, _] = useState(document.body)
  const [position, setPosition] = useState('')
  // const [toastProps, setToastProps] = useState({})

  const toasts = SirviceSingleton.showHistory()

  const toastRedux = useSelector(
    (state) => state.toast.toasts,
  )


  useImperativeHandle(
    ref,
    () => ({
      add: addHandleToast,
      delete: deleteHandleToast,
    }),
    [],
  )

  const addHandleToast = useCallback((newToast) => {
    setPosition(newToast.position)

    // setPosition(newToast.position)
    // setToastProps(newToast)
    // setTimeout(function () {                     // проверка времени показа
    //   SirviceSingleton.deleteToast(toastProps.id)
    // }, 3000)
  }, [])

  const deleteHandleToast = (idToast) => {
    SirviceSingleton.deleteToast(idToast)
  }

  return ReactDOM.createPortal(
    <Wrapper >
      <R>
        {SirviceSingleton.showHistory().map((toast) => (
          <Toast
            {...toast}
            key={toast.id}
            deleteToast={deleteHandleToast}
            forwardedRef={ref}
          />
        ))}
      </R>
    </Wrapper>,
    documentPortal,
  )
})

export default ToastContainer
