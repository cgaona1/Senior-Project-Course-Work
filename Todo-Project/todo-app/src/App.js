import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
  const taskList = props.tasks.map(task => (
    <Todo 
        id={task.id} 
        taskName={task.taskName} 
        completed={task.completed}
        key={task.id}
      />
    )
  );

  return (
    <div className="todoapp">
      <h1>Todo App</h1>
      <Form />
      <ul
        role="list"
        className=""
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
