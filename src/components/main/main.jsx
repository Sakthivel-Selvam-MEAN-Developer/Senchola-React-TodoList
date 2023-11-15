import { AddTodo } from '../add_todo/add.todo'
import { TodoList } from '../list_todo/list.todo'
import { useState } from 'react'
import './main.css'

const Main = () => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todo-list')))
    const [todo, setTodo] = useState('')

    const handleCheckChange = (id) => {
        const list = todoList.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        setTodoList(list)
        localStorage.setItem('todo-list', JSON.stringify(list))
    }

    const handleDelete = (id) => {
        const list = todoList.filter(todo => todo.id !== id)
        setTodoList(list)
        localStorage.setItem('todo-list', JSON.stringify(list))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1
        const newTodoItem = {
            id,
            checked:false,
            todo
        }
        const listItems = [...todoList, newTodoItem]
        setTodoList(listItems)
        localStorage.setItem('todo-list', JSON.stringify(listItems))
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <>
            <AddTodo 
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
            />
            <TodoList 
                todoList = {todoList}
                handleCheckChange = {handleCheckChange}
                handleDelete = {handleDelete}
            />
        </>
    )
}

export { Main }