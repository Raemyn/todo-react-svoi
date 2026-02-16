import { useEffect, useState } from "react";
import taskAPI from "@/shared/api/tasks";
const TaskPage = (props) => {
    const { params } = props
    const taskId = params.id
    const [task, setTask] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        taskAPI.getById(taskId)
            .then(taskData => {
                setTask(taskData)
                setHasError(false)
            })
            .catch(() => {
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    })
    if (isLoading) return <h1>Loading...</h1>
    if (hasError) return <h1>Task not found</h1>
    return (
        <div>
            <h1>{task.title}</h1>
            {task.isDone ? <p>Задача выполнена</p> : <p>Задача не выполнена</p>}
        </div>
    )
}
export default TaskPage