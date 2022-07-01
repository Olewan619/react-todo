import React from "react"
import Check from "./Check"
import cn from 'classnames'
import { BsTrash } from "react-icons/bs"

const TodoItem = ({todo, changeTodo, removeTodo }) => {
    return (
        <div className="todoitem">
            <button className="todoitem_2"
            onClick={() => changeTodo(todo.id)}>
                <Check isCompleted={todo.isCompleted}/>
            <span className={cn({
                'dec': todo.isCompleted,
            })}>{todo.title}</span>
            </button>
            <button className="butrash">
            <BsTrash className="trash"  onClick={() => removeTodo(todo.id)}/>
            </button>
            
        </div>
    )
}

export default TodoItem;