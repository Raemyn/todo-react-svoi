import { useCallback, useEffect, useMemo, useState } from "react"
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

    const deleteALLTask = useCallback(() => {
        const isConfirm = window.confirm('Вы уверены что хотите удалить все задачи?')
        if (isConfirm) setTasks([])

    }, [])

    const deleteTask = useCallback((taskId => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }), [tasks])
    const toggleTaskComplete = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) return { ...task, isDone }
                return task
            })
        )
    }, [tasks])
    const addTask = useCallback(() => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks(prev => [...prev, newTask])
            setNewTaskTitle('')
        }

        console.log('Задача добавлена');
    }, [newTaskTitle])

    const [searchQuery, setSearchQuery] = useState('');



    const filtredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
    }, [searchQuery, tasks])

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