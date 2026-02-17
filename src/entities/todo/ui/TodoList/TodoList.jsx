import { memo, useContext, useMemo } from "react"
import TodoItem from "../TodoItem"
import { TaskContext } from "../../../todo"



const TodoList = memo(({ styles, searchQuery }) => {
    const { tasks } = useContext(TaskContext)

    const filteredTasks = useMemo(() => {
        const clear = searchQuery.trim().toLowerCase()
        if (!clear) return tasks

        return tasks.filter(task =>
            task.title.toLowerCase().includes(clear)
        )
    }, [tasks, searchQuery])

    return (
        <ul className={styles.list}>
            {filteredTasks.map(task => (
                <TodoItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                />
            ))}
        </ul>
    )
})

export default memo(TodoList)