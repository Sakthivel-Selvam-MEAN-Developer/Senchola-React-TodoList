import { useState } from 'react'
import './list.todo.css'
import DeleteSvg from '../../assets/delete-filled-svgrepo-com.svg'

const TodoList = () => {

    const [todoList, setTodoList] = useState([
        {
            id: 1,
            chaecked: true,
            todo: 'Do Code'
        },
        {
            id: 2,
            chaecked: false,
            todo: 'Do Code 1'
        },
        {
            id: 3,
            chaecked: false,
            todo: 'Do Code 2'
        }
    ])

    return (
        <>
            <ul>
                {todoList.map(todo =>
                (
                    <li>
                        <input type="checkbox" checked = {todo.chaecked}/>
                        <p>{todo.todo}</p>
                        <img src={DeleteSvg} alt="" />
                        
                    </li>

                ))}
            </ul>
        </>
    )
}

export { TodoList }