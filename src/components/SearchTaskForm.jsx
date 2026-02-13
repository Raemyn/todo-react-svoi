import { memo } from "react"
import Field from "./Field"

const SearchTaskForm = (props) => {
  const {
    onSearchInput,
    searchQuery,
    setSearchQuery
  } = props
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