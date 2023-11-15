import { useState } from 'react'
import './App.css'
import { Main } from './components/main/main'

function App() {

  localStorage.setItem('todo-list', JSON.stringify([
    {
      id: 1,
      checked: false,
      todo: 'Sample'
    }
  ]))

  return (
    <>
      <Main />
    </>
  )
}

export default App
