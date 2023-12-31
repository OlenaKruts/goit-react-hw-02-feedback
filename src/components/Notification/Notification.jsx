import PropTypes from 'prop-types';
export const Notification = ({ message }) =>
  message && <p className="message">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.propTypes = {
  message: PropTypes.string,
};
