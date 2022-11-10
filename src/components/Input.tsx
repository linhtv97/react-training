import { ChangeEvent, FunctionComponent, useState } from 'react'

type InputProp = {
  value: string
  onChangeValue: (newValue: string) => void
}

const Input: FunctionComponent<InputProp> = (props) => {
  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChangeValue(event.target.value)
  }
  return (
    <input
      value={props.value}
      onChange={(event) => handleChangeInputValue(event)}
    />
  )
}

export default Input
