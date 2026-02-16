import { createContext,  } from "react";
import useTasks from "../model/useTasks";

export const TaskContext = createContext({})
export const TasksProvider = (props) => {
    const { children } = props
    
    const {
        tasks,
        filtredTasks,
        deleteTask,
        deleteALLTask,
        toggleTaskComplete,
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
    } = useTasks()


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