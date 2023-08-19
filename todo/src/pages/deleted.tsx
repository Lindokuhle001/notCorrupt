import { useContext, useEffect, useMemo } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/todoContext";

function deleted() {
  const { inputRef, handleSubmit, todos, handleChecked, handleDelete } =
    useContext(TodoContext);

  let deletedTodos = useMemo(
    () => todos.filter((todo) => todo.deleted),
    [todos]
  );

  useEffect(() => {
    return () => {
      deletedTodos = [];
    };
  }, []);

  return (
    <div>
      <AddTodo inputElement={inputRef} handleSubmit={handleSubmit} />

      <TodoList
        todos={deletedTodos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default deleted;
