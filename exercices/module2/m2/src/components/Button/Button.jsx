const Button = ({ clickFunction, delta, text }) => {

    return (
        <button 
            onClick={clickFunction}
            data-delta={delta}
        >
            {text}
        </button>
    )
}

export default Button