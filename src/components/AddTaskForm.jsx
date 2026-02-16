import { memo, useContext, useState } from "react"
import Button from "./Button/Button"
import Field from "./Field/Field"
import { TaskContext } from "../context/TaskContext"


const AddTaskForm = (props) => {
    const {
        styles
    } = props

    const [error, setError] = useState('')
    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }
    const {
        addTask, newTaskTitle,
        setNewTaskTitle,
    } = useContext(TaskContext)
    const onInput = (event) => {
        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0
        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'The task connot be empty' : '')
    }
    return (
        <form className={`${styles.form}`} onSubmit={onSubmit}>
            <Field
                value={newTaskTitle}
                onInput={onInput}
                id={"new-task"}
                className={`${styles.field}`}
                label='New task title'
                error={error}
            >New task title</Field>
            <Button
                isDisabled={newTaskTitle.trim().length === 0}
                type={'submit'}
            >
                Add
            </Button>
        </form>
    )
}
export default memo(AddTaskForm)