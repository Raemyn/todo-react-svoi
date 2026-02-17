import { memo, useContext } from "react"
import Field from "@/shared/ui/Field/Field"
import { TaskContext } from "@/entities/todo"





const SearchTaskForm = memo(({ searchQuery, setSearchQuery }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Field
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="search"
      >
        Search task
      </Field>
    </form>
  )
})

export default memo(SearchTaskForm) 