import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')
    const [id, setId] = useState(0)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const provideId = () => {
        setId(id + 1)
        return id
    }

    // biar ga ke refresh
    const handleSubmit = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: provideId(),
            text: input
        })

        setInput('')
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Add a todo'
                value={input}
                className='todo-input'
                onChange={handleChange}
                ref={inputRef} />
            <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm