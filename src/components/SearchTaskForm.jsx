import Field from "./Field"

const SearchTaskForm = (props) => {
  const {
    onSearchInput
  } = props
  return (
    <form className="todo__form" onSubmit={(event)=>event.preventDefault()}
    >
      <Field
        onInput={(event) => onSearchInput(event.target.value)}
        id={"search-task"}
        className={'todo__field'}
        type={'search'}
      >Search task
      </Field>

    </form>
  )
}
export default SearchTaskForm