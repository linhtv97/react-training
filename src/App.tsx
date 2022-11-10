import React, { useState } from 'react'
import './App.css'
import Submit from './components/Submit'
import Input from './components/Input'
import List from './components/List'

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Learn Nodejs'])
  const [value, setValue] = useState('')

  const handleAddNewTodo = () => {
    const isComplicate = todos.find((element) => element === value)
    if (!isComplicate) {
      const newTodos = [...todos, value]
      setTodos(newTodos)
      setValue('')
    } else {
      alert('lap')
    }
  }
  return (
    <div className="App">
      <List todos={todos} />
      <Submit handleAddNewTodo={handleAddNewTodo} />
      <Input value={value} onChangeValue={setValue} />
    </div>
  )
}

export default App
