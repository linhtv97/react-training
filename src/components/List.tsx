import React, { FunctionComponent } from 'react'

type ListProps = {
  todos: string[]
}
const List: FunctionComponent<ListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  )
}

export default List
