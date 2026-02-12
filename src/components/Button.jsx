const Button = (props) => {
    const {
        type,
        children,
        className='',
    } = props
    return (
        <button
            className={`button ${className}`}
            type={type}
        >{children}
        </button>
    )
}
export default Button