const Filter = ({filterValue, setFilterValue}) => {

    const handleFilterValue = (event) => {
        setFilterValue(event.target.value)
    }

    return (
        <form>
            <div>
                Filter shown with : 
                <input 
                    value={filterValue}
                    onChange={handleFilterValue}
                    placeholder='filter with ...'
                />
            </div>
        </form>
    )
}

export default Filter