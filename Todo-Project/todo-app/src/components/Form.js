import React, {useState} from "react";

function Form(props){
    const [name, setName] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    
    function handleChange(e){
        setName(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>
                What needs to be done?
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className=""
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="">
                Add
            </button>
        </form>
    );
}

export default Form;