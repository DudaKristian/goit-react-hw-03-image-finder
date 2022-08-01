import PropTypes from 'prop-types';
import css from "./feedback.module.css"



const FeedbackOptions = ( {onLeaveFeedback, options}) => {
    return (
        <div>
            <ul>
                {options.map(name => (
                    <button
                        type="button"
                        key={name}
                        onClick={onLeaveFeedback}
                        name={name}
                        className = {css.feedback}
                    >{name[0].toUpperCase() + name.slice(1)}</button>
                ))}
            </ul>
        </div>    
    )

};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeedbackOptions;







