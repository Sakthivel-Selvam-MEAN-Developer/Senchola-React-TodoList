import { useState } from 'react'
import './add.todo.css'

const AddTodo = ({handleSubmit, handleChange}) => {

    return (
        <div className="container add">
            <h3 className='text-white'>Todo List</h3>
            <form className="container add-todo mt-4 d-flex" onSubmit={handleSubmit}>
                <input type="text" className="form-control me-2" onChange={(e) => handleChange(e)} required/>
                <button className='ms-2 btn btn-warning'>Add</button>
            </form>
        </div>
    )
}

export { AddTodo }