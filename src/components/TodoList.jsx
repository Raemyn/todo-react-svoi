import { memo, useContext } from "react"
import TodoItem from "./TodoItem/TodoItem"
import { TaskContext } from "../context/TaskContext"



const TodoList = (props) => {
    const {
        styles
    } = props
    const {
        tasks, filtredTasks
    } = useContext(TaskContext)

    return (

        <ul className={`${styles.list}`}>
            {(filtredTasks ?? tasks).map((task) =>
                <TodoItem
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}
                />
            )}


        </ul>
    )
}
export default memo(TodoList)