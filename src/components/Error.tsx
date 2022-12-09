import { FunctionComponent } from 'react'

type duplicateProps = {
  duplicate: string
}

const Duplicate: FunctionComponent<duplicateProps> = ({ duplicate }) => {
  return (
    <div>
      <h1>{duplicate}</h1>
    </div>
  )
}
export default Duplicate
