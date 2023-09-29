const Button = ({ clickFunction, delta, text }) => {

    return (
        <button 
            onClick={clickFunction}
        >
            {text}
        </button>
    )
}

export default Button