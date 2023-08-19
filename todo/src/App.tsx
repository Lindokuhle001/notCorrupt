import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { dummyTodoList } from "./data";
import { Todo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyTodoList);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = inputRef.current?.value;

    if (inputValue) {
      const newTodo: Todo = {
        title: inputValue,
        completed: false,
        id: uuidv4(),
      };

      setTodos((currentTodos) => [...currentTodos, newTodo]);
      inputRef.current!.value = "";
    }
  }

  function handleDelete(todoId: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter(({ id }) => id !== todoId);
    });
  }

  function handleChecked(checkboxId: string) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === checkboxId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <div className="app">
      <h1>Todo List</h1>

      <AddTodo inputElement={inputRef} handleSubmit={handleSubmit} />

      <TodoList
        todos={todos}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;


