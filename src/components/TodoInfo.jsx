import { memo, useContext } from "react"
import { TaskContext } from "../context/TaskContext"


const TodoInfo = (props) => {
    const {
        styles
    } = props
    const {
        tasks, deleteALLTask
    } = useContext(TaskContext)
    const total = tasks.length;
    const done = tasks.filter((task) => task.isDone !== true).length;

    const hasTasks = total > 0

    return (
        <div className={`${styles.info}`}>
            <div className={`${styles.totalTasks}`}>
                Done {done} from {total}
            </div>

            {hasTasks && (
                <button
                    className={`${styles.deleteAllButton}`}
                    type="button"
                    onClick={deleteALLTask}
                >
                    Delete all
                </button>
            )}


        </div>
    )
}
export default memo(TodoInfo)