import { AddTodo } from '../add_todo/add.todo'
import { TodoList } from '../list_todo/list.todo'
import './main.css'

const Main = () => {
    return(
        <>
            <AddTodo />
            <TodoList />
        </>
    )
}

export {Main}