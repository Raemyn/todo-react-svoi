import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        onTaskCompleteChange,
        onDeleteTaskButtonClick,
        tasks = []
    } = props
    return (
        <ul className="todo__list">

            {tasks.map((task) => 
                <TodoItem
                    onTaskCompleteChange={onTaskCompleteChange}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}

                />
            )}


        </ul>
    )
}
export default TodoList