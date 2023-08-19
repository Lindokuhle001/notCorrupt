import { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  handleDelete: (id: string) => void;
  handleChecked: (id: string) => void;
};

function TodoList({ todos, handleDelete, handleChecked }: TodoListProps) {
  return (
    <section id="todos">
      <h2>Todos</h2>

      <ul>
        {todos.map((todoItem) => (
          <li className="todoItem" key={todoItem.id}>
            <TodoItem
              todoItem={todoItem}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
