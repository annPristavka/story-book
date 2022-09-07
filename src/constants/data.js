import React from 'react'
import themeStyle from '../theme'
import {
  ErrorIcon,
  InfoIcon,
  WarningIcon,
  SuccessIcon,
} from '../assets/icons'

export const position = [
  { id: 0, name: 'top-left', value: 'top-left' },
  { id: 1, name: 'top-right', value: 'top-right' },
  { id: 2, name: 'bottom-left', value: 'bottom-left' },
  { id: 3, name: 'bottom-right', value: 'bottom-right' },
]

export const type = [
  { id: 0, name: 'info', value: 'info' },
  { id: 1, name: 'success', value: 'success' },
  { id: 2, name: 'warning', value: 'warning' },
  { id: 3, name: 'error', value: 'error' },
]

export const theme = [
  {
    id: 0,
    name: 'gold',
    color: themeStyle.colors.gold,
    value: 'gold',
  },
  {
    id: 1,
    name: 'violet',
    color: themeStyle.colors.violet,
    value: 'violet',
  },
  {
    id: 2,
    name: 'green',
    color: themeStyle.colors.green,
    value: 'green',
  },
  {
    id: 3,
    name: 'red',
    color: themeStyle.colors.red,
    value: 'red',
  },
]

export const positionInfo = {
  'top-left': [0, 0],
  'top-right': [0, 0],
  'bottom-left': [0, 0],
  'bottom-right': [0, 0],
}

export const typeInfo = {
  error: 'Error toast example',
  warning: 'Warning toast example',
  success: 'Success toast example',
  info: 'Info toast example',
}

const styleImg = { width: '30px', height: '30px' }

export const typeImg = {
  error: <ErrorIcon style={styleImg} />,
  warning: <WarningIcon style={styleImg}/>,
  success: <SuccessIcon style={styleImg}/>,
  info: <InfoIcon style={styleImg}/>,
}
