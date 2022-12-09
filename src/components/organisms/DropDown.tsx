import { FunctionComponent, useState } from 'react'
import { Category } from '../../App'
import ArrowDown from '../../iconContainer/ArrowDown'
import Button from '../atoms/Button/Button'

type Props = {
  onClick: (status: Category) => void
  status: string
}

const DropDown: FunctionComponent<Props> = ({ status, onClick }) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="dropdown inline-block relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="dropbtn h-11 w-16 content-center rounded-lg bg-slate-300 hover:bg-slate-200"
      >
        {status}
      </button>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={
          open
            ? `block dropdown-content absolute space-y-0.5 border-slate-200 border-2 bg-slate-300`
            : `hidden`
        }
      >
        <button
          className="bg-slate-50  h-11 w-24 hover:bg-slate-100"
          onClick={() => onClick('All')}
        >
          All
        </button>
        <button
          className="bg-slate-50  h-11 w-24  hover:bg-slate-100"
          onClick={() => onClick('Done')}
        >
          Done
        </button>
        <button
          className="bg-slate-50 h-11 w-24  hover:bg-slate-100"
          onClick={() => onClick('Undone')}
        >
          Undone
        </button>
      </div>
    </div>
  )
}
export default DropDown
