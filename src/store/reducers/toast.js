import {
  DELETE_TOAST,
  ADD_TOAST,
  CLEAR_TOASTS,
} from '../../constants'

const initialState = {
  toasts: [],
}

export function toastReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      }
    case ADD_TOAST:
      return { toasts: [...state.toasts, action.payload] }

    case CLEAR_TOASTS:
      return { toasts: [] }

    default:
      return state
  }
}
