import React, { ReactNode, useEffect, useState } from 'react'
import './App.css'
import Input from './components/atoms/Input/Input'
import Button from './components/atoms/Button/Button'
import List from './components/organisms/List'
import Error from './components/atoms/Error/Error'
import instance from './InstanceAxios'
import Plus from './iconContainer/Plus'
import Loading from './iconContainer/Loading'
import Edit from './iconContainer/Edit'
import Check from './iconContainer/Check'
import TrashCan from './iconContainer/TrashCan'
import DropDown from '../src/components/organisms/DropDown'

export type Todo = {
  id: number
  name: string
  done: boolean
}
export type Category = 'All' | 'Done' | 'Undone'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [idWillUpdate, setIdWillUpdate] = useState<number | null>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [seachField, setSeachField] = useState('')
  const [isLoading, setIsLoading] = useState<ReactNode>(<Plus />)
  const [isRemove, setIsRemove] = useState<ReactNode>(<Check />)
  const [category, setCategory] = useState<Category>('Done')
  const BASE_URL = 'http://localhost:8888'
  
  //done
  useEffect(() => {
    instance
      .get('/todos')
      .then(function (response) {
        setTodos(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  //search
  useEffect(() => {
    instance
      .get('/todos', {
        params: { name: seachField, category: category },
      })
      .then(function (response) {
        setTodos(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [seachField, category])
  //add new todo
  const onClickHandler = () => {
    handleAddNewTodo(value)
  }

  const handleAddNewTodo = (newTodoData: string) => {
    setIsLoading(<Loading />)
    instance
      .post('/todos', {
        name: newTodoData,
      })
      .then(function (response) {
        console.log(response)
        console.log('success')
        setTodos([...todos, response.data])
        setValue('')
        setIsLoading(<Plus />)
      })
      .catch(function (error) {
        console.log(error.response.data.message)
        setError(error.response.data.message)
        setIsLoading(<Plus />)
      })
  }
  //delete
  const handleDeleteTodo = (id: number) => {
    instance
      .delete(`/todos/${id}`, {})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
        setError(error.response.data.message)
      })
    const newTodos = todos.filter((element) => element.id !== id)
    setTodos(newTodos)
  }

  const changeAddStatus = () => {
    setError(null)
    setSeachField('')
  }
  const changeSearchFieldStatus = () => {
    setError(null)
    setValue('')
  }
//edit
  const handleEdit = (todo: Todo) => {
    setIdWillUpdate(todo.id)
    setValue(todo.name)
  }

  const isEditing = !!idWillUpdate

  const doEditing = () => {
    instance
      .put(`/todos/${idWillUpdate}`, {
        name: value,
      })
      .then(function (response) {
        console.log(response)
        const newDoneList = [...todos]
        const objIndex = newDoneList.findIndex((obj) => obj.id === idWillUpdate)
        newDoneList[objIndex].name = value
        setTodos(newDoneList)
        setIsRemove(<TrashCan />)
        setValue('')
        setIdWillUpdate(null)
      })
      .catch(function (error) {
        console.log(error)
        setError(error.response.data.message)
      })
  }
//done
  const handleDone = (id: number) => {
    instance
      .put(`/todos/${id}`, {
        done: true,
      })
      .then(function (response) {
        console.log(response)
        const newDoneList = [...todos]
        const objIndex = newDoneList.findIndex((obj) => obj.id === id)
        newDoneList[objIndex].done = true
        setTodos(newDoneList)
      })
      .catch(function (error) {
        console.log(error)
        setError(error.response.data.message)
      })
  }

  return (
    <div className={`bg-gray-50  flex flex-col items-center justify-center`}>
      <div className=" w-1/2">
        <div>
          <header className={`text-black`}>TO DO LIST</header>
        </div>
        <div className="flex">
          <div>
            <Input
              className="w-80 mr-5 mb-5"
              value={value}
              changeValue={setValue}
              onTyping={changeAddStatus}
              placeHolder="New todo here..."
            />
          </div>
          <div>
            <Button
              onClick={!isEditing ? () => onClickHandler() : () => doEditing()}
              className="px-2 py-2"
              children={!isEditing ? isLoading : <Edit />}
            />
          </div>
        </div>
        {/* <Button onClick={removeHandler} children={'Remove'} type={'danger'} /> */}
        <div className="flex">
          <Input
            className="w-80 mr-5 mb-5"
            value={seachField}
            changeValue={setSeachField}
            onTyping={changeSearchFieldStatus}
            placeHolder="Search..."
          />
          <DropDown
            status={category}
            onClick={(status) => setCategory(status)}
          />
        </div>
        {error && <Error message={error} />}
        <div className="bg-gray-300 rounded-lg p-3">
          <List
            todos={todos}
            editHandler={handleEdit}
            deleteHandler={handleDeleteTodo}
            checkDone={handleDone}
            // onCheck={onCheck}
            darkMode={darkMode}
            isRemove={isRemove}
          />
        </div>
      </div>
    </div>
  )
}

export default App
