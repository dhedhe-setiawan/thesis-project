import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ isLogin, access }) => {
  const redirectPath = {
    M: '/dashboard',
    A: '/dashboard',
    K: '/data/makanan',
  };

  return isLogin ? <Navigate to={redirectPath[access]} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  access: PropTypes.any,
  isLogin: PropTypes.any,
};
