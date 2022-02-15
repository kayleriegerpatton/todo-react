import { useTodos } from "../../hooks/useTodos";
import { TodoCard } from "../TodoCard";

export const Todos = ({ onDelete }) => {
  // pull todos from global state
  const { todos } = useTodos();

  // return presentational elements
  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </section>
  );
};
