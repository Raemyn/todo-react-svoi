import Field from "./Field"

const SearchTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
        id={"search-task"}
        className={'todo__field'}
        type={'search'}
      >Search task
      </Field>

    </form>
  )
}
export default SearchTaskForm