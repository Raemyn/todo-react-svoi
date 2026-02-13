import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const TaskContext = createContext({})
export const TasksProvider = (props) => {
    const [tasks, setTasks] = useState(() => {
        
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) return JSON.parse(savedTasks)
        return [{ id: 'task-1', title: 'Купить молоко', isDone: false, },
        { id: 'task-2', title: 'Погладить кота', isDone: true, },
        ];

    })
    useEffect(() => {

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
    }, [newTaskTitle])

    const [searchQuery, setSearchQuery] = useState('');



    const filtredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
    }, [searchQuery, tasks])

    const { children } = props
    return (<TaskContext.Provider
        value={{
            tasks,
            filtredTasks,
            deleteTask,
            deleteALLTask,
            toggleTaskComplete,
            addTask,
            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery
        }}
    >

        {children}

    </TaskContext.Provider>)
}