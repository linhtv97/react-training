import { FunctionComponent } from 'react'

type Room = {
  id: string
}

const Room: FunctionComponent<Room> = ({ id }) => {
  return <div>is using {id}</div>
}

export default Room
