import React, { createContext, useRef, useState } from "react";
import { Todo } from "../types";
import { dummyTodoList } from "../data";
import { v4 as uuidv4 } from "uuid";

type TodoContextType = {
  todos: Todo[];
  inputRef: React.RefObject<HTMLInputElement> | null;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
  handleChecked: (id: string) => void;
};

const initialTodoContext: TodoContextType = {
  todos: [],
  inputRef: null,
  handleSubmit: () => {},
  handleDelete: () => {},
  handleChecked: () => {},
};

export const TodoContext = createContext<TodoContextType>(initialTodoContext);

export function TodoContextProvider({ children }: React.PropsWithChildren<{}>) {
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
        deleted:false
      };

      setTodos((currentTodos) => [...currentTodos, newTodo]);
      inputRef.current!.value = "";
    }
  }

  function handleDelete(todoId: string) {

    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            deleted: !todo.deleted,
          };
        } else {
          return todo;
        }
      });
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

  const value = {
    todos,
    inputRef,
    handleSubmit,
    handleDelete,
    handleChecked,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
