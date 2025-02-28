import Button from './button/Button';
import Profile from './Profile';

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/dashboard';
  };

  return (
    <nav className='sticky top-0 flex items-center justify-between w-full px-5 py-2 bg-brand'>
      <Profile nama={'Dede Setiawan'} jabatan={'Manager'} img={'/profile/man.png'} />
      <Button className={'text-light bg-brand'} text={'Log Out'} onClick={logout} />
    </nav>
  );
};

export default Navbar;
