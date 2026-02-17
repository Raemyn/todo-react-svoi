import { createContext, useMemo, } from "react";
import useTasks from "../model/useTasks";

export const TaskContext = createContext({})
export const TasksProvider = (props) => {
    const { children } = props
  
    const {
        tasks,
   
        deleteTask,
        deleteALLTask,
        toggleTaskComplete,
        addTask,
      
     
    } = useTasks()

  const value = useMemo(() => ({
        tasks,
       
        deleteTask,
        deleteALLTask,
        toggleTaskComplete,
        addTask,
       
      
    }), [
        tasks,
      
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