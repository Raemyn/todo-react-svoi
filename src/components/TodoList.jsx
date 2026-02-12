import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
        tasks = []
    } = props
    return (
        <ul className="todo__list">

            {tasks.map((task) => 
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
export default TodoList