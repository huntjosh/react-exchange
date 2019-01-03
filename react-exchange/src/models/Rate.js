import PropTypes from 'prop-types';

// We can define reusable prop-type shapes so that we can be more specific than PropTypes.object
const propTypeStructure = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

export default { propTypeStructure };
