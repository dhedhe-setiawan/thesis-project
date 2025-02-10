import PropTypes from 'prop-types';
import { useId } from 'react';

const Input = ({ inline, label, type = 'text', placeholder, name, register, rules, error }) => {
  const id = useId();

  return (
    <div className={`flex ${inline ? 'items-center gap-3 justify-between' : 'flex-col'}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className='px-3 py-2 rounded'
        type={type}
        placeholder={placeholder}
        {...(register ? register(name, rules) : {})} // Cegah error jika register undefined
      />

      {error && <p className='text-sm text-red-500'>{error.message}</p>}
    </div>
  );
};

Input.propTypes = {
  error: PropTypes.any,
  inline: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.any,
  register: PropTypes.any,
  rules: PropTypes.any,
  type: PropTypes.string,
};

export default Input;
