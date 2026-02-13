import { memo } from "react"

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
            className={`button ${className}`}
            type={type}
        >{children}
        </button>
    )
}
export default Button