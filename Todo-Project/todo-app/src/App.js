import React, {useState} from "react";
import {nanoid} from "nanoid";
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
        toggleTaskCompleted={toggleTaskCompleted}
      />
    )
  );
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = { id: "todo-"+nanoid(), taskName: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task =>{
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks[0]);
  }

  return (
    <div className="todoapp">
      <h1>Todo App</h1>
      <h2>What needs to be done?</h2>
      <h2>{headingText}</h2>

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
