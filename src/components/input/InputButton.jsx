import PropTypes from 'prop-types';
const InputButton = ({ value }) => {
  return (
    <input
      className='px-3 py-2 rounded cursor-pointer bg-brand hover:brightness-95 text-light'
      value={value}
      type='submit'
    />
  );
};

InputButton.propTypes = {
  value: PropTypes.any,
};

export default InputButton;
