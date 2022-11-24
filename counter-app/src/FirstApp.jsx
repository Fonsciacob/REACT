import PropTypes from 'prop-types';

export const App = ({ title }) => {
  const newMessage = 'Fernando';

  return (
    <>
      <p>{title}</p>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

App.defaultProps = {
  title: 'J',
};
