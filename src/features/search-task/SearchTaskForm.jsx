import { memo, useContext } from "react"
import Field from "@/shared/ui/Field/Field"
import { TaskContext } from "@/entities/todo"





const SearchTaskForm = (props) => {
  const {
    styles
  } = props
  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TaskContext)
  return (
    <form className={`${styles.form}`} onSubmit={(event) => event.preventDefault()}
    >
      <Field
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
        id={"search-task"}
        className={`${styles.field}`}
        type={'search'}
      >Search task
      </Field>

    </form>
  )
}
export default memo(SearchTaskForm) 