

const Field = (props) => {
  const {
    className = '',
    id,
    type = 'text',
    children,
    onInput,
    value,

  } = props

  return (
    <div className={`field ${className} `}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {children}
      </label>
      <input
        value={value}
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  )
}
export default Field