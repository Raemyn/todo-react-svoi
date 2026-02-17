import { createContext, useMemo, } from "react";
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
      
        searchQuery,
        setSearchQuery,
    } = useTasks()

  const value = useMemo(() => ({
        tasks,
        filtredTasks,
        deleteTask,
        deleteALLTask,
        toggleTaskComplete,
        addTask,
       
        searchQuery,
        setSearchQuery,
    }), [
        tasks,
        filtredTasks,
        deleteTask,
        deleteALLTask,
        toggleTaskComplete,
        addTask,
      
    ])
    return (<TaskContext.Provider
        value={value}
    >

        {children}

    </TaskContext.Provider>)
}