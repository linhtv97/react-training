import React, { ChangeEvent, FunctionComponent, useState } from 'react'
type submitProp = {
  handleAddNewTodo: () => void
}

const Submit: FunctionComponent<submitProp> = (props) => {
  return <button onClick={() => props.handleAddNewTodo()}>New</button>
}

export default Submit
