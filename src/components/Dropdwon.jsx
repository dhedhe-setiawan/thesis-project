import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Dropdown = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative inline-block w-full text-left'>
      {/* Tombol untuk membuka dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-full px-3 py-2 text-left rounded text-light hover:bg-light/50'
      >
        {text}
        <FontAwesomeIcon icon={'fas fa-caret-down'} />
      </button>

      {/* Dropdown menu */}
      {isOpen && <div className='w-full *:pl-6'>{children}</div>}
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.any,
  text: PropTypes.any,
};

export default Dropdown;
