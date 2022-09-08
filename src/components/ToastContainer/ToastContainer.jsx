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
  // const [count, setCount] = useState(0)
  const [documentPortal, _] = useState(document.body) // portal

  const [, forceUpdate] = useState({}) // force

  const toasts = SirviceSingleton.showHistory()


  useImperativeHandle(
    ref,
    () => ({
      add: addHandleToast,
      onDelete: deleteHandleToast,
    }),
    [],
  )

  const addHandleToast = useCallback(
    (newToast) => {
      for (let i = 0; i < toasts.length; i++) {
        if (toasts[i].position === newToast.position) {
         // count++
        }
      }

      forceUpdate({})

      setTimeout(function () {
        SirviceSingleton.deleteToast(newToast.id)
        forceUpdate({})
      }, 3000)
    },
    [toasts],
  )

  const deleteHandleToast = (id) => () => {
    SirviceSingleton.deleteToast(id)
    forceUpdate({})
  }

  return ReactDOM.createPortal(
    <Wrapper>
      <R ref={ref}>
        {SirviceSingleton.showHistory().map((toast) => (
          <Toast
            {...toast}
            key={toast.id}
            deleteToast={deleteHandleToast}
            toasts={toasts}
            // count={count}
          />
        ))}
      </R>
    </Wrapper>,
    documentPortal,
  )
})

export default ToastContainer
