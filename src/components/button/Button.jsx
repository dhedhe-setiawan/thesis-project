import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ link, state, text, children, className, onClick, disabled }) {
  return (
    <Link
      className={`block px-3 py-2 rounded  w-fit h-fit hover:brightness-95 ${className} ${
        disabled && 'cursor-wait saturate-0'
      }`}
      to={link}
      state={state}
      onClick={onClick}
    >
      {children || text}
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  disabled: PropTypes.string,
  link: PropTypes.any,
  onClick: PropTypes.any,
  state: PropTypes.any,
  text: PropTypes.any,
};

export default Button;
