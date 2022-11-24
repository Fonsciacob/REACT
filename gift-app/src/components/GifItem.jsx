import PropTypes from 'prop-types';

export const GifItem = ({ url }) => {
  return (
    <div className="p-2 overflow-hidden">
      <img src={url} className="" />
    </div>
  );
};

GifItem.propTypes = {
  url: PropTypes.string.isRequired,
};
