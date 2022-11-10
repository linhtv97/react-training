import { ChangeEvent, FunctionComponent, useState } from 'react'

type ClearProps = {
  onClickChange: () => void
}

const Button: FunctionComponent<ClearProps> = (props) => {
  return <button onClick={() => props.onClickChange()}>Clear</button>
}

export default Button
