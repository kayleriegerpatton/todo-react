import { format } from "date-fns";
import { useTodos } from "../../hooks/useTodos";
import "./TodoCard.css";

export const TodoCard = (props) => {
  // pull setTodos from global context (needed for onDelete function)
  const { setTodos } = useTodos();

  // remove todo item from LS
  const onDelete = (event) => {
    const todosFromLS = JSON.parse(localStorage.getItem("todoItems")) || [];

    const newTodos = todosFromLS.filter((todo) => {
      return todo.id !== event.currentTarget.id;
    });

    setTodos(newTodos);

    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  };

  // return presentational elements
  return (
    <div className="card todo-card text-center">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Due Date: {format(new Date(props.dueDate), "mm dd yyyy")}
        </h6>
        <p className="card-text">{props.content}</p>
        <button id={props.id} onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
