import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import Frame from '../../components/Frame';

const PrivateRoute = ({ isLogin, access, allowed }) => {
  if (!isLogin) {
    return <Navigate to={'/'} />;
  }

  if (!allowed.includes(access)) {
    return <Navigate to='/' />; // Redirect jika role tidak sesuai
  }

  return (
    <Frame access={access}>
      <Outlet />
    </Frame>
  );
};

PrivateRoute.propTypes = {
  access: PropTypes.string,
  allowed: PropTypes.any,
  isLogin: PropTypes.any,
};

export default PrivateRoute;
