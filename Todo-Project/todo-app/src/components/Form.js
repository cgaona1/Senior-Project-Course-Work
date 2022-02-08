import React from "react";

function Form(props){
    return(
        <form>
            <h2>
                What needs to be done?
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className=""
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="">
                Add
            </button>
        </form>
    );
}

export default Form;