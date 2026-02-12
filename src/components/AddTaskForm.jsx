import Button from "./Button"
import Field from "./Field"

const AddTaskForm = () => {
    return (
        <form className="todo__form">
            <Field
                id={"new-task"}
                className='todo__field'
                label='New task title'
            >New task title</Field>
            <Button
               
                type={'submit'}>Add</Button>
        </form>
    )
}
export default AddTaskForm