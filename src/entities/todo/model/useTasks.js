import { useCallback, useEffect, useMemo, useState } from "react";
import taskAPI from "@/shared/api/tasks";



const useTasks = () => {


    const [tasks, setTasks] = useState([])



    useEffect(() => {
        taskAPI.getAll().then(setTasks)
    }, [])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteALLTask = useCallback(() => {
        const isConfirm = window.confirm('Вы уверены что хотите удалить все задачи?')
        if (isConfirm) {
            taskAPI.deleteAll(tasks)
            setTasks([]);
        }

    }, [tasks])


    const deleteTask = useCallback((taskId => {
        taskAPI.delete(taskId)
            .then(() => {
                setTasks(
                    tasks.filter((task) => task.id !== taskId)
                );
            }, [tasks])
    }), [tasks])


    const toggleTaskComplete = useCallback((taskId, isDone) => {
        taskAPI.toggleCompleate(taskId,isDone)
            .then(() => {
                setTasks(
                    tasks.map((task) => {
                        if (task.id === taskId) return { ...task, isDone }
                        return task
                    })
                )
            })

    }, [tasks])

    const addTask = useCallback(() => {

        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                title: newTaskTitle,
                isDone: false,
            }
            taskAPI.add(newTask)
                .then((addedTask) => {
                    setTasks(prevTasks => [...prevTasks, addedTask])
                    setNewTaskTitle('')
                    setSearchQuery('')
                })
        }
    }, [newTaskTitle])

    const [searchQuery, setSearchQuery] = useState('');

    const filtredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) : null
    }, [searchQuery, tasks])
    return {
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
    }
}
export default useTasks