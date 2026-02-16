import AddTaskForm from "../AddTaskForm"
import SearchTaskForm from "../SearchTaskForm"
import TodoInfo from "../TodoInfo"
import TodoList from "../TodoList"
import styles from './Todo.module.scss'

const Todo = () => {


    return (

        <div className={`${styles.todo}`}>
            <h1 className={`${styles.title}`}>To Do List</h1>
            <AddTaskForm styles={styles} />

            <SearchTaskForm styles={styles} />

            <TodoInfo styles={styles} />

            <TodoList styles={styles} />

        </div>

    )
}
export default Todo