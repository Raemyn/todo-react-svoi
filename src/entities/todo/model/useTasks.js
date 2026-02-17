import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import taskAPI from "@/shared/api/tasks";

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL': {
            return Array.isArray(action.tasks) ? action.tasks : state
        }

        case 'ADD': {
            return [...state, action.task]
        }
        case 'TOGGLE_COMPLETE': {
            const { id, isDone } = action
            return state.map((task) => {
                return task.id === id ? { ...task, isDone } : task
            })
        }
        case 'DELETE': {
            return state.filter((task) => task.id !== action.id)
        }

        case 'DELETE_ALL': {
            return []
        }

        default:
            return state;
    }
}
const useTasks = () => {


    const [tasks, dispatch] = useReducer(taskReducer, [])



    useEffect(() => {
        taskAPI.getAll().then((serverTasks) => {
            dispatch({ type: 'SET_ALL', tasks: serverTasks })
        })
    }, [])



    const deleteALLTask = useCallback(() => {
        const isConfirm = window.confirm('Вы уверены что хотите удалить все задачи?')
        if (isConfirm) {
            taskAPI.deleteAll(tasks)
            dispatch({ type: 'DELETE_ALL' })
        }

    }, [tasks])


    const deleteTask = useCallback((taskId) => {
        taskAPI.delete(taskId)
            .then(() => {
                dispatch({ type: 'DELETE', id: taskId })
            })
    }, [])


    const toggleTaskComplete = useCallback((taskId, isDone) => {
        taskAPI.toggleCompleate(taskId, isDone)
            .then(() => {
                dispatch({ type: 'TOGGLE_COMPLETE', id: taskId, isDone })
            })
    }, [])

    const addTask = useCallback((title) => {
        const newTask = {
            title,
            isDone: false,
        }

        return taskAPI.add(newTask)
            .then((addedTask) => {
                dispatch({ type: 'ADD', task: addedTask })
            })
    }, [])

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


        searchQuery,
        setSearchQuery
    }
}
export default useTasks