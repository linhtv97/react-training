import { ChangeEvent, FunctionComponent } from 'react'

type Props = {
  value: string
  changeValue: (newValue: string) => void
  onTyping: () => void
  className?: string
  placeHolder?: string
}

const Input: FunctionComponent<Props> = (props) => {
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.changeValue(event.target.value)
    props.onTyping()
  }
  return (
    <input
      className={`border rounded-lg h-11 border-gray-300 tracking-wider text-base ${props.className}`}
      id="input"
      value={props.value}
      onChange={(event) => inputHandler(event)}
      placeholder={props.placeHolder}
    />
  )
}
export default Input
