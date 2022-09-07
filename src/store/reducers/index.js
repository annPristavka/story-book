import { combineReducers } from 'redux'

import { toastReducer } from './toast'

export const rootReducer = combineReducers({
  toast: toastReducer,
})
