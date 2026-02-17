import { useContext } from "react";
import { TaskContext } from '@/entities/todo';
import RouterLink from "@/shared/ui/RouterLink";

import styles from './TodoItem.module.scss'

const TodoItem = (props) => {
  const {
    id,
    title,
    className,
    isDone,
  } = props;
  const {
    toggleTaskComplete, deleteTask
  } = useContext(TaskContext)
  return (
    <li className={`${styles.todoItem} ${className}`}>
      <input
        className={`${styles.checkbox}`}
        id={id}
        type="checkbox"
        onChange={(e) => toggleTaskComplete(id, e.target.checked)} // Исправлено!
        checked={isDone}
      />
      <label
        className=   {`${styles.label} visually-hidden`}
      
      
        htmlFor={id} // Исправлено: динамический id
      >
        {title}
      </label>
      <RouterLink to={`tasks/${id}`} aria-label='Tasks details page'>
        {title}
      </RouterLink>
      <button
        onClick={() => deleteTask(id)}
        className={`${styles.deleteButton}`}
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
