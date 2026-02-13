import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TodoItem = (props) => {
  const {
    id,
    title,
    className,
    isDone,
  } = props;
const {
    toggleTaskComplete,deleteTask
} = useContext(TaskContext)
  return (
    <li className={`todo-item ${className}`}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        onChange={(e) => toggleTaskComplete(id, e.target.checked)} // Исправлено!
        checked={isDone}
      />
      <label
        className="todo-item__label"
        htmlFor={id} // Исправлено: динамический id
      >
        {title}
      </label>
      <button
        onClick={() => deleteTask(id)}
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;
