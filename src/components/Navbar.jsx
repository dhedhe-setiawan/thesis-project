import { setJabatan } from '../utils/helper';
import Button from './button/Button';
import Profile from './Profile';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/dashboard';
  };

  const token = localStorage.getItem('token');
  const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload

  return (
    <nav className='sticky top-0 flex items-center justify-between w-full px-5 py-2 bg-brand'>
      <Profile nama={decoded.nama} jabatan={setJabatan(decoded.access)} img={'/profile/man.png'} />
      <Button className={'text-light bg-brand'} text={'Log Out'} onClick={logout} />
    </nav>
  );
};

export default Navbar;
