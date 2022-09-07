import React, { useState } from 'react'
import {
  ContainerList,
  ElementList,
  RadioButton,
  LabelRadio,
} from './styled'

const PositionList = React.memo(
  ({ typeList, nameList, setOption, option }) => {
    const handleChange = (e) => {
      setOption({
        ...option,
        [nameList]: e.target.value,
      })
    }

    return (
      <ContainerList>
        {typeList.map(({ id, name, value }) => (
          <ElementList key={`${id}${name}`}>
            <RadioButton
              id={id}
              type="radio"
              name={nameList}
              value={value}
              onChange={handleChange}
              id={name}
            />
            <LabelRadio htmlFor={name}>{name}</LabelRadio>
          </ElementList>
        ))}
      </ContainerList>
    )
  },
)

export default PositionList
