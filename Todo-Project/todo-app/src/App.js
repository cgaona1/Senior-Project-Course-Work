
function App(props) {

  return (
    <div className="todoapp">
      <h1>Todo App</h1>
      <form>
        <h2>
          What needs to be done?
        </h2>
        <input
          type = "text"
          id = "new-todo-input"
          className = ""
          name = "text"
          autoComplete = "off"
        />
        <button type="submit" className="">
          Add
        </button>
      </form>
    </div>
  );
}

export default App;
