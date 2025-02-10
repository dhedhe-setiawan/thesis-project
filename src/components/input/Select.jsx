import PropTypes from 'prop-types';
import { useId } from 'react';

const Select = ({ label, inline, children, register, name, rules }) => {
  const id = useId();

  return (
    <div className={`flex ${inline ? 'items-center gap-3 justify-between' : 'flex-col'}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        className='w-full px-3 py-2 rounded'
        name=''
        id={id}
        {...(register ? register(name, rules) : {})}
      >
        {label && (
          <option hidden value=''>
            {label}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};

Select.propTypes = {
  children: PropTypes.any,
  inline: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  register: PropTypes.func,
  rules: PropTypes.any,
};

export default Select;
