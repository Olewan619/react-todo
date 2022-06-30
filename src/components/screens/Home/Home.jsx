import React, { useState } from "react";
import TodoItem from "./item/Todoitem";

const data = [
    {
        id: 'task111',
        title: 'Сделать Todo-list',
        isCompleted: false,
    },
    {   id: 'task222',
        title: 'Сделать Секундомер',
        isCompleted: false,
    },
    {
        id: 'task333',
        title: 'Сделать Календарь',
        isCompleted: false,
    },
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    return (
        <div className="Main">
            <h1 className="title-todo">TodoList</h1>
            {todos.map(todo => (
                <TodoItem key={todo.id}  todo={todo}  changeTodo={changeTodo} />
            ))}
        </div>
    )
}
export default Home