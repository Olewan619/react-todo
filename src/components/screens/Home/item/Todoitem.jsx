import React from "react";
import Check from "./Check";

const TodoItem = ({todo}) => {
    return (
        <button className="todoitem">
            <Check />
            {todo.title}
        </button>
    )
}

export default TodoItem;