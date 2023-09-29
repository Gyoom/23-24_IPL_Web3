import StatisticLine from "components/StatisticLine/StatisticLine";


const Display = ({ text, feedback }) => {

    const display = () => {
        var all = feedback.good + feedback.neutral + feedback.bad;

        if (all !== 0) {
            return (
                <table>
                    <tbody>
                        <StatisticLine name="Good" value={feedback.good} />
                        <StatisticLine name="Neutral" value={feedback.neutral} />
                        <StatisticLine name="Bad" value={feedback.bad} />
                        <StatisticLine name="All" value={all} />
                        <StatisticLine name="Average" value={all / 3} />
                        <StatisticLine name="Ratio Good" value={(feedback.good / all) * 100} type = "ratio"/>
                        <StatisticLine name="Ratio Neutral" value={(feedback.neutral / all) * 100} type = "ratio"/>
                        <StatisticLine name="Ratio Bad" value={(feedback.bad / all) * 100} type = "ratio"/>
                    </tbody>
                </table> 
            )
        } else {
            return (
                <p>No feedback given</p>
            )
        }

    }
        return (
            <div>
                <h1>{text}</h1>
                { display() }
            </div>
        )
}

export default Display