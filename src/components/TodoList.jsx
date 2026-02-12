import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        filtredTasks,
        onTaskCompleteChange,
        onDeleteTaskButtonClick,
        tasks = []
    } = props
 
    return (
        
        <ul className="todo__list">
            {(filtredTasks ?? tasks).map((task) =>
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