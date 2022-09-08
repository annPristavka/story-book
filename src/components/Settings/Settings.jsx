import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'

import List from '../List'
import Button from '../Button'
import ToastProvider from '../ToastProvider'
import { addToast } from '../../store/action/toast'
import { position, type, theme } from '../../constants'
import { SirviceSingleton } from '../../utils/ServiceSingleton'

import {
  Wrapper,
  ContainerSettings,
  Title,
  WrapperButton,
} from './styled'

const Settings = React.memo(() => {
  const [option, setOption] = useState({
    theme: '',
    type: '',
    position: '',
  })

  const [, forceUpdate] = useState({})

  const createToast = () => {
    SirviceSingleton.createToast(option) // create toast
  }

  const deleteAllToasts = () => {
    SirviceSingleton.deleteToasts()
    forceUpdate({})
  }

  return (
    <ContainerSettings>
      <Wrapper>
        <Title>Position</Title>
        <List
          typeList={position}
          nameList="position"
          setOption={setOption}
          option={option}
        />
      </Wrapper>
      <Wrapper>
        <Title>Type</Title>
        <List
          typeList={type}
          nameList="type"
          setOption={setOption}
          option={option}
        />
      </Wrapper>
      <Wrapper>
        <Title>Theme</Title>
        <List
          typeList={theme}
          nameList="theme"
          setOption={setOption}
          option={option}
        />
      </Wrapper>
      <WrapperButton>
        <Button onClick={createToast}> Show Toast</Button>
        <Button onClick={deleteAllToasts}>
          Clear Toast
        </Button>
        <ToastContainer />
      </WrapperButton>
      <ToastProvider />
    </ContainerSettings>
  )
})

export default Settings
