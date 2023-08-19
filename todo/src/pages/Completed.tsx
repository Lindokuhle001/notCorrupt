import { useContext, useEffect, useMemo } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/todoContext";

function Completed() {
  const { inputRef, handleSubmit, todos, handleChecked, handleDelete } =
    useContext(TodoContext);

  let completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed && !todo.deleted),
    [todos]
  );

  useEffect(() => {
    return () => {
      completedTodos = [];
    };
  }, []);

  return (
    <div>
      <AddTodo inputElement={inputRef} handleSubmit={handleSubmit} />

      <TodoList
        todos={completedTodos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Completed;
