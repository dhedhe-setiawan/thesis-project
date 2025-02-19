import PropTypes from 'prop-types';
import { useId } from 'react';

const Input = ({
  inline,
  label,
  type = 'text',
  placeholder,
  name,
  className,
  register,
  rules,
  error,
}) => {
  const id = useId();

  return (
    <div className={`flex ${inline ? 'items-center gap-3 justify-between' : 'flex-col'}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={`px-3 py-2 rounded ${className}`}
        type={type}
        placeholder={placeholder}
        {...(register ? register(name, rules) : {})} // Cegah error jika register undefined
      />

      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.any,
  error: PropTypes.shape({
    message: PropTypes.any,
  }),
  inline: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.any,
  register: PropTypes.func,
  rules: PropTypes.any,
  type: PropTypes.string,
};

export default Input;
