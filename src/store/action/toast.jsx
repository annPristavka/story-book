import {
  ADD_TOAST,
  DELETE_TOAST,
  CLEAR_TOASTS,
} from '../../constants'

export const addToast = (payload) => ({
  type: ADD_TOAST,
  payload,
})

export const deleteToast = (payload) => ({
  type: DELETE_TOAST,
  payload,
})

export const clearToasts = (payload) => ({
  type: CLEAR_TOASTS,
  payload,
})
