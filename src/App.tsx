import React, { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Typography from './components/Typography'
import Button from './components/Button'

function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="App">
      <Input
        value={inputValue}
        onChangeValue={(newValue) => setInputValue(newValue)}
      />
      <Typography value={inputValue} />
      <Button onClickChange={() => setInputValue('')} />
    </div>
  )
}

export default App
