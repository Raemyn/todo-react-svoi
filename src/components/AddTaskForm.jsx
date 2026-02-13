import { memo, useContext } from "react"
import Button from "./Button"
import Field from "./Field"
import { TaskContext } from "../context/TaskContext"

const AddTaskForm = () => {


    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }
    const {
        addTask, newTaskTitle,
        setNewTaskTitle,
    } = useContext(TaskContext)
    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                value={newTaskTitle}
                onInput={(event) => setNewTaskTitle(event.target.value)}
                id={"new-task"}
                className='todo__field'
                label='New task title'
            >New task title</Field>
            <Button
                type={'submit'}
            >
                Add
            </Button>
        </form>
    )
}
export default memo(AddTaskForm)