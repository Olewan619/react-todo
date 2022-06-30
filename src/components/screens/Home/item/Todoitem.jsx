import React from "react";
import Check from "./Check";
import cn from 'classnames'

const TodoItem = ({todo, changeTodo}) => {
    return (
        <button className="todoitem"
        onClick={() => changeTodo(todo.id)}>
            <Check isCompleted={todo.isCompleted}/>
            <span className={cn({
                'dec': todo.isCompleted,
            })}>{todo.title}</span>
        </button>
    )
}

export default TodoItem;