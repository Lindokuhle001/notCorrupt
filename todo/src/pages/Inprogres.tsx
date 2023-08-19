// import { useContext } from "react";
// import AddTodo from "../components/AddTodo";
// import TodoList from "../components/TodoList";
// import { TodoContext } from "../context/todoContext";

// function Inprogres() {
//   const { inputRef, handleSubmit, todos, handleChecked, handleDelete } =
//     useContext(TodoContext);
//   return (
//     <div>
//       <AddTodo inputElement={inputRef} handleSubmit={handleSubmit} />

//       <TodoList
//         todos={todos}
//         handleChecked={handleChecked}
//         handleDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default Inprogres;


import { useContext, useEffect, useMemo } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/todoContext";

function Inprogres() {
  const { inputRef, handleSubmit, todos, handleChecked, handleDelete } =
    useContext(TodoContext);

  let InprogresTodos = useMemo(
    () => todos.filter((todo) => !todo.deleted),
    [todos]
  );

  useEffect(() => {
    return () => {
      InprogresTodos = [];
    };
  }, []);

  return (
    <div>
      <AddTodo inputElement={inputRef} handleSubmit={handleSubmit} />

      <TodoList
        todos={InprogresTodos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Inprogres;
