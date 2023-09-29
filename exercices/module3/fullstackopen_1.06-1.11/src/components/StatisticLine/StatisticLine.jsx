const StatisticLine = ({ name, value, type }) => {

        return (
            <tr><td>{name} </td><td> {value} {type === "ratio" ? '%' : ''}</td></tr>
        )
}

export default StatisticLine