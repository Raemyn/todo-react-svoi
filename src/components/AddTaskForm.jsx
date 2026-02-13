import { memo } from "react"
import Button from "./Button"
import Field from "./Field"

const AddTaskForm = (props) => {
    const {
        newTaskTitle,
        setNewTaskTitle,
        addTask
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                value={newTaskTitle}
                onInput={(event)=>setNewTaskTitle(event.target.value)}
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