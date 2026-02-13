

const Field = (props) => {
  const {
    className = '',
    id,
    type = 'text',
    children,
    onInput,
    value,
    error

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
        className={`field__input ${error ? 'is-invalid' : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
      {error && (
        <span className="field__error" title={error}>
          {error}
        </span>
      )}

    </div>
  )
}
export default Field