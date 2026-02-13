import { memo, useContext } from "react"
import { TaskContext } from "../context/TaskContext"


const TodoInfo = () => {
    

    const {
       tasks,deleteALLTask
    } = useContext(TaskContext)
    const total= tasks.length;
    const done = tasks.filter((task) => task.isDone !== true).length;
    
    const hasTasks = total > 0

    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>

            {hasTasks && (
                <button
                    className="todo__delete-all-button"
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