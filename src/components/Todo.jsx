import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [

        { id: 'task-1', title: 'Купить молоко', isDone: false, },
        { id: 'task-2', title: 'Погладить кота', isDone: true, },
    ]
    const deleteALLTask = () => { console.log('Удаляем все задачи') }
    const deleteTask = (taskId => {
        console.log(`Удаляем задачу с id' ${taskId}`)
    })
    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Задача ${taskId} ${isDone ? 'Не выполнена' : 'Выполнена'}`)
    }
    const filterTasks = (query) => {
        console.log(`Поиск ${query}`)
    }
    const addTask = () => {
        
        console.log('Задача добавлена');
    }
   


    return (

        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
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