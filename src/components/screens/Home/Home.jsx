import React, { useState } from "react";
import TodoItem from "./item/Todoitem";

const todos = [
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

    return (
        <div className="Main">
            <h1 className="title-todo">TodoList</h1>
            {todos.map(todo => (
                <TodoItem key={todo.id}  todo={todo} />
            ))}
        </div>
    )
}
export default Home