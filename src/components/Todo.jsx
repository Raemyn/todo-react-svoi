import { useEffect, useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState(() => {

        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) return JSON.parse(savedTasks)
        return [{ id: 'task-1', title: 'Купить молоко', isDone: false, },
        { id: 'task-2', title: 'Погладить кота', isDone: true, },
        ];

    })
    useEffect(() => {
        console.log(`Сохраняем данные ${tasks}`)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
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

    const [searchQuery, setSearchQuery] = useState('');

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filtredTasks = clearSearchQuery.length > 0
        ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
    return (

        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                addTask={addTask}
            />

            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearchInput={filterTasks}
            />

            <TodoInfo
                onDeleteAllButtonClick={deleteALLTask}
                done={
                    tasks.filter((task) => task.isDone !== true).length
                }
                total={tasks.length} />
            <TodoList
                filtredTasks={filtredTasks}
                onDeleteTaskButtonClick={deleteTask}
                tasks={tasks}
                onTaskCompleteChange={toggleTaskComplete}

            />
        </div>

    )
}
export default Todo