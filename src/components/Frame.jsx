import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import Heading from './Heading';
import Button from './button/Button';

const Frame = ({ children, access }) => {
  const path = [
    '/data/makanan',
    '/data/minuman',
    '/data/sembako',
    '/data/pegawai',
    '/data/pesanan',
  ];

  const location = useLocation();

  const toSentenceCase = text => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const getPathname = () => {
    return location.pathname.split('/')[2];
  };

  return (
    <div className='flex h-screen'>
      <Sidebar access={access} />

      <div className='w-full h-full overflow-y-auto'>
        <Navbar />

        {path.includes(location.pathname) ? (
          <div className='flex flex-col items-center gap-10 p-10'>
            <Heading title={`Data ${toSentenceCase(getPathname())}`}>
              {location.pathname !== '/data/pesanan' && (
                <Button
                  className={'bg-brand text-light'}
                  link={
                    location.pathname === '/data/pegawai'
                      ? '/tambah/pegawai'
                      : '/tambah/barang'
                  }
                  text={
                    location.pathname === '/data/pegawai'
                      ? 'Tambah Pegawai'
                      : 'Tambah Barang'
                  }
                />
              )}
            </Heading>

            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

Frame.propTypes = {
  access: PropTypes.any,
  children: PropTypes.any,
};

export default Frame;
