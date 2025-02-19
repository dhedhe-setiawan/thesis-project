import PropTypes from 'prop-types';
const InputButton = ({ value, disabled = false }) => {
  return (
    <input
      className={`px-3 py-2 rounded cursor-pointer bg-brand hover:brightness-95 text-light ${
        disabled && 'cursor-wait saturate-0  '
      }`}
      value={value}
      type='submit'
      disabled={disabled}
    />
  );
};

InputButton.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.any,
};

export default InputButton;
