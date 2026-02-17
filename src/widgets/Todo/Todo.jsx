import AddTaskForm from "@/features/add-task"
import SearchTaskForm from "@/features/search-task"
import TodoInfo from "@/features/stats"
import { TodoList } from "@/entities/todo"
import styles from './Todo.module.scss'
import { useState } from "react"

const Todo = () => {

    const [searchQuery, setSearchQuery] = useState('')
    return (

        <div className={`${styles.todo}`}>
            <h1 className={`${styles.title}`}>To Do List</h1>
            <AddTaskForm styles={styles} />

            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                styles={styles} />

            <TodoInfo styles={styles} />

            <TodoList searchQuery={searchQuery} styles={styles} />

        </div>

    )
}
export default Todo