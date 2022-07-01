import React, { useState }from "react";

const CreateTodo = ({setTodos}) => {

    const [title, setTitle ] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
            id: new Date(),
            title,
            isCompleted: false,
        },
        ...prev,
    ])
    setTitle('')
    }

    return (
    <div className="add-input">
        <input
        placeholder="Напишите заметку"
        className="input-color"
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        ></input>
    </div>
    )
}

export default CreateTodo;