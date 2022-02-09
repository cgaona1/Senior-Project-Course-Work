import React, {useState} from "react";

function Todo(props){
    const [isEditing, setEditing] = useState(false);

    const editingTemplate = (
        <form>
            <div className="form-group">
                <label htmlFor={props.id}>
                    New name for {props.taskName}
                </label>
                <input id={props.id} type="text"/>
            </div>
            <div className="button-group">
                <button type="button">
                    Cancel
                </button>
                <button type="submit">
                    Save
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div>
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
                <button type="button" onClick={()=> setEditing(true)}>
                    Edit
                </button>
                <button 
                    type="button"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );

    return(
        <li>
            {isEditing? editingTemplate : viewTemplate}
        </li>
    );
}

export default Todo;