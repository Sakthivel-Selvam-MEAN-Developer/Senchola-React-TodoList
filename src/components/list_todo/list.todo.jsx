import './list.todo.css'
import DeleteSvg from '../../assets/delete-filled-svgrepo-com.svg'

const TodoList = ({todoList, handleCheckChange, handleDelete}) => {

    return (
        <>
            {todoList.length ?
                (
                    <ul className='container d-flex flex-column justify-content-between'>
                        {todoList.map(todo =>
                        (
                            <li key={todo.id} className='d-flex rounded justify-content-between align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <input type="checkbox" checked={todo.checked} onChange={() => handleCheckChange(todo.id)} />
                                    <p className='text-white m-0 ps-4 pe-2'>{todo.todo}</p>
                                </div>
                                <img src={DeleteSvg} alt="delete-logo" onClick={() => handleDelete(todo.id)} type="button" width={25} />
                            </li>

                        ))}
                    </ul>
                ) : (
                    <p className='mt-5 text-white'>List is Empty...!</p>
                )
            }
        </>
    )
}

export { TodoList }