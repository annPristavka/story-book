import React from 'react'
import { string } from 'prop-types'
import theme from '../../theme'
import { warning } from '../../assets/close.svg'

import Toast from './index'

export default {
  title: 'Toast', // name
  component: Toast,
}

// const Template = (arg) => <Toast {...arg} />

// export const Info = Template.bind({})
// export const Error = Template.bind({})
// export const Warning = Template.bind({})
// export const Success = Template.bind({})

// Info.args = {
//   children: 'Info toast example',
//   color: theme.colors.violet,
//   img: warning,
// }

// Error.args = {
//   children: 'Error toast example',
//   color: theme.colors.red,
//   img: warning,
// }

// Warning.args = {
//   children: 'Warning toast example',
//   color: theme.colors.gold,
//   img: warning,
// }

// Success.args = {
//   children: 'Success toast example',
//   color: theme.colors.green,
//   img: warning,
// }
