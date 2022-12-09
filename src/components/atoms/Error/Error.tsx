import { FunctionComponent } from 'react'

type errorProps = {
  message: string
}

const Error: FunctionComponent<errorProps> = ({ message }) => {
  return (
    <div>
      <span className="pb-2" style={{ color: 'red' }}>
        {message}
      </span>
    </div>
  )
}
export default Error
