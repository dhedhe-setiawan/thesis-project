import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ link, text, children, className }) {
  return (
    <Link
      className={`block px-3 py-2 rounded  w-fit h-fit hover:brightness-95  ${className}`}
      to={link}
    >
      {children || text}
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  link: PropTypes.any,
  text: PropTypes.any,
};

export default Button;
