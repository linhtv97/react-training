import { FunctionComponent, ReactNode } from 'react'
import { Todo } from '../../App'
import Check from '../../iconContainer/Check'
import Edit from '../../iconContainer/Edit'
import Plus from '../../iconContainer/Plus'
import TrashCan from '../../iconContainer/TrashCan'
import Button from '../atoms/Button/Button'

type listProps = {
  todos: Todo[]
  editHandler: (todo: Todo) => void
  deleteHandler: (id: number) => void
  checkDone: (id: number) => void
  // onCheck: (value: boolean, id: number) => void
  isRemove: ReactNode
  darkMode: boolean
}

const List: FunctionComponent<listProps> = ({
  todos,
  editHandler,
  deleteHandler,
  checkDone,
  // onCheck,
  darkMode,
  isRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const done = todo.done
        return (
          <div
            className="bg-gray-50 m-5 p-2 rounded-lg flex items-center space-x-2 justify-between "
            key={todo.id}
          >
            {/*<CheckBox onCheck={() => onCheck()} />*/}
            {/* <input
              type="checkBox"
              onChange={(event) => onCheck(event.target.checked, todo.id)}
            /> */}
            <span
              className={
                darkMode
                  ? `text-white text-lg ${
                      done && 'line-through italic text-gray-500'
                    }`
                  : `text-black text-lg ${
                      done && 'line-through italic text-gray-500'
                    }`
              }
            >
              {todo.name}
            </span>
            <div>
              {!done && (
                <Button
                  className="px-2 py-0.5"
                  onClick={() => checkDone(todo.id)}
                >
                  <Check />
                </Button>
              )}
              {done && (
                <Button
                  className="px-2 py-0.5"
                  onClick={() => deleteHandler(todo.id)}
                >
                  <TrashCan />
                </Button>
              )}
              <Button className="px-2 py-0.5" onClick={() => editHandler(todo)}>
                <Edit />
              </Button>
            </div>
          </div>
        )
      })}
    </ul>
  )
}

export default List
