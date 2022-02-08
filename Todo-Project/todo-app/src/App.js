import React, {useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks.map(task => (
    <Todo 
        id={task.id} 
        taskName={task.taskName} 
        completed={task.completed}
        key={task.id}
      />
    )
  );

  function addTask(name) {
    const newTask = { id: "id", taskName: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="todoapp">
      <h1>Todo App</h1>
      <Form addTask={addTask} />
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
