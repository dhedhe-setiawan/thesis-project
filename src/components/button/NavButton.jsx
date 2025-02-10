import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavButton = ({ link, children }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `block px-3 py-2 rounded text-light hover:bg-light/50 ${isActive ? 'bg-brand/50' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};

NavButton.propTypes = {
  children: PropTypes.any,
  link: PropTypes.any,
};

export default NavButton;
