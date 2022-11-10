import { useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(1)
  return (
    <div>
      {time}
      <button onClick={() => setTime(time + 1)}>Add</button>
      <button disabled={!time} onClick={() => setTime(time - 1)}>
        Sub
      </button>
    </div>   
  )
}
export default Clock
