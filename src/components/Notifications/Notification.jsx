import PropTypes from 'prop-types';


const Notification = ({ message }) => {
    return (
        <span>{ message }</span>
    )
};


Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification