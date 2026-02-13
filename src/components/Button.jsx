import { memo } from "react"

const Button = (props) => {
    
    const {
        type,
        children,
        className = '',
        onAddTaskButtonClick,
    } = props
    return (
        <button

            onClick={onAddTaskButtonClick}
            className={`button ${className}`}
            type={type}
        >{children}
        </button>
    )
}
export default Button