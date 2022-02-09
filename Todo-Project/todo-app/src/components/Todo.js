import React from "react";

function Todo(props){
    return(
        <li>
            <div>
                <input
                 id={props.id} 
                 type="checkbox" 
                 defaultChecked={props.completed}
                 onChange={() => props.toggleTaskCompleted(props.id)}
                />

                <label htmlFor={props.id}>
                    {props.taskName}
                </label>
            </div>
            <div>
                <button type="button">
                    Edit
                </button>
                <button 
                    type="button"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default Todo;