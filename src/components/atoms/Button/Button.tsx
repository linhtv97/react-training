import { FunctionComponent, ReactNode } from 'react'
import Plus from '../../../iconContainer/Plus'

type buttonProps = {
  onClick?: () => void
  children?: ReactNode
  type?: 'primary' | 'danger'
  className?: string
}

const Button: FunctionComponent<buttonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={`text-black mx-0.5 rounded-lg h-min cursor-pointer ${className} bg-gray-300 hover:bg-gray-200
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
{
  /* <button
className={`px-2 py-2 text-white mx-0.5 rounded-lg h-min cursor-pointer ${className} ${
  type === 'danger'
    ? 'bg-red-600 hover:bg-red-700'
    : 'bg-indigo-700 hover:bg-indigo-800'
}`} */
}
