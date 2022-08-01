import PropTypes from 'prop-types';
import css from "./statistics.module.css"

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    return (
        <div>
            <ul className={css.statItem}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: { positivePercentage }%</li> 
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics