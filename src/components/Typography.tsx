import { FunctionComponent } from 'react'

type InputProp = {
  value: string
}

const Typography: FunctionComponent<InputProp> = ({ value }) => {
  return <p>{value}</p>
}

export default Typography
