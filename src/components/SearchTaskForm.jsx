import { memo, useContext } from "react"
import Field from "./Field"
import { TaskContext } from "../context/TaskContext"





const SearchTaskForm = () => {

  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TaskContext)
  return (
    <form className="todo__form" onSubmit={(event) => event.preventDefault()}
    >
      <Field
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
        id={"search-task"}
        className={'todo__field'}
        type={'search'}
      >Search task
      </Field>

    </form>
  )
}
export default memo(SearchTaskForm) 