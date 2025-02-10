import Button from './button/Button';
import Profile from './Profile';

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex items-center justify-between w-full px-5 py-2 bg-brand'>
      <Profile nama={'Dede Setiawan'} jabatan={'Manager'} img={'/profile/man.png'} />
      <Button className={'text-light bg-brand'} text={'Log Out'} />
    </nav>
  );
};

export default Navbar;
