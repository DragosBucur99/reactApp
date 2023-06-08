import TodoItem from "./TodoItem";

export default function TodoItems({ todos, setTodos, click }) {
  return (
    <div
      className="flex-col gap-5 w-full"
      style={{ display: click ? "none" : "flex" }}
    >
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <TodoItem
            title={todo.title}
            date={todo.date}
            id={todo.id}
            priority={todo.priority}
            active={todo.active}
            setTodos={setTodos}
            todos={todos}
          />
        </div>
      ))}
    </div>
  );
}
