function Todo({task, description, togglePopup }) {
  return (
    <>
    <div className="todo-item">
      <h2> {task} </h2>
      <p>{description}</p>
      <button onClick={() => togglePopup()}> Delete </button>
    </div>
    </>
  );
}

export default Todo;
