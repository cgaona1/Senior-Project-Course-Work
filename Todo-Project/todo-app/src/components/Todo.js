import React from "react";

function Todo(props){
    return(
        <li>
            <div>
                <input id="todo-0" type="checkbox" defaultChecked={props.completed}/>
                <label htmlFor={props.id}>
                    {props.taskName}
                </label>
            </div>
            <div>
                <button type="button">
                    Edit <span className="">{props.taskName}</span>
                </button>
                <button type="button">
                    Delete <span className="">{props.taskName}</span>
                </button>
            </div>
        </li>
    );
}

export default Todo;