import { Todo } from "../types";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<Todo>;
  handleDelete: (id: string) => void;
  handleChecked: (id: string) => void;
};

function TodoList({ todos, handleDelete, handleChecked }: TodoListProps) {

  function filter(filter:string) {

    
    return
  }

  // function Completed() {
  //   const { inputRef, handleSubmit, todos, handleChecked, handleDelete } =
  //     useContext(TodoContext);
  
  //   let completedTodos = useMemo(
  //     () => todos.filter((todo) => todo.completed && !todo.deleted),
  //     [todos]
  //   );
  
  //   useEffect(() => {
  //     return () => {
  //       completedTodos = [];
  //     };
  //   }, []);

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
