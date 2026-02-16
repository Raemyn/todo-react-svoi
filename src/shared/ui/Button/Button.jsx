import styles from './Button.module.scss'
const Button = (props) => {

    const {
        type,
        children,
        className = '',
        onAddTaskButtonClick,
        isDisabled,
    } = props
    return (
        <button
            disabled={isDisabled}
            onClick={onAddTaskButtonClick}
            className={`${styles.button} ${className}`}
            type={type}
        >{children}
        </button>
    )
}
export default Button