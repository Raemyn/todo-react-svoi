import styles from './Field.module.scss'

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
    <div className={`${styles.field} ${className} `}>
      <label
        className={`${styles.label}`}
        htmlFor={id}
      >
        {children}
      </label>
      <input
        value={value}
        className={`${styles.input} ${error ?  styles.isInvalid : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
      {error && (
        <span className={`${styles.error}`} title={error}>
          {error}
        </span>
      )}

    </div>
  )
}
export default Field