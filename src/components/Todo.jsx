import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai'

function Todo({ completeTodo, todos, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, idx) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={idx}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <AiOutlineCloseCircle onClick={() => removeTodo(todo.id)} className='delete-icon' />
                <AiOutlineEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
            </div>

        </div>
    ))
}

export default Todo