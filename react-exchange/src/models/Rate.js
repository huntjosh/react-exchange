import PropTypes from 'prop-types';

const propTypeStructure = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

export default { propTypeStructure };
