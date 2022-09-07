import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../store'
import ToastProvider from '../ToastProvider'
import ErrorBoundaries from '../ErrorBoundaries'
import Toast from '../Toast'
import Settings from '../Settings'
import GlobalStyles from '../../globalStyles'

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundaries>
        {/* <Toast /> */}
        <Settings />
        <GlobalStyles />
        <ToastProvider />
        
      </ErrorBoundaries>
    </Provider>
  )
}

export default App
