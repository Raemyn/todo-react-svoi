import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState([
        { id: 'task-1', title: 'Купить молоко', isDone: false, },
        { id: 'task-2', title: 'Погладить кота', isDone: true, },
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteALLTask = () => {
        const isConfirm = window.confirm('Вы уверены что хотите удалить все задачи?')
        if (isConfirm) setTasks([])

    }
    const deleteTask = (taskId => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    })
    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) return { ...task, isDone }
                return task
            })
        )
    }
    const filterTasks = (query) => {
        console.log(`Поиск ${query}`)
    }
    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,

            }
            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
        console.log('Задача добавлена');
    }



    return (

        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                addTask={addTask}
            />

            <SearchTaskForm
                onSearchInput={filterTasks}
            />

            <TodoInfo
                onDeleteAllButtonClick={deleteALLTask}
                done={
                    tasks.filter((task) => task.isDone !== true).length
                }
                total={tasks.length} />
            <TodoList
                onDeleteTaskButtonClick={deleteTask}
                tasks={tasks}
                onTaskCompleteChange={toggleTaskComplete}

            />
        </div>

    )
}
export default Todo