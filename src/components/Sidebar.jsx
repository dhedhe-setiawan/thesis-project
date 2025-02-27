import PropTypes from 'prop-types';
import Dropdwon from './Dropdwon';
import NavButton from './button/NavButton';

const Sidebar = ({ access }) => {
  return (
    <aside className='h-full bg-dark'>
      <hgroup>
        <h2 className='px-5 py-5 mx-auto text-light w-fit text-nowrap'>Karya Bersama</h2>
        <hr />
      </hgroup>

      {access === 'M' && (
        <>
          <NavButton link={'/dashboard'}>Dashboard</NavButton>
          <NavButton link={'/data/pegawai'}>Data Pegawai</NavButton>
          <Dropdwon text={'Data Barang'}>
            <NavButton link={'/data/makanan'}>Data Makanan</NavButton>
            <NavButton link={'/data/minuman'}>Data Minuman</NavButton>
            <NavButton link={'/data/sembako'}>Data Sembako</NavButton>
          </Dropdwon>
          <Dropdwon text={'Laporan'}>
            <NavButton link={'/laporan/masuk'}>Laporan Masuk</NavButton>
            <NavButton link={'/laporan/keluar'}>Laporan Keluar</NavButton>
          </Dropdwon>
        </>
      )}

      {access === 'K' && (
        <>
          <NavButton link={'/data/makanan'}>Data Makanan</NavButton>
          <NavButton link={'/data/minuman'}>Data Minuman</NavButton>
          <NavButton link={'/data/sembako'}>Data Sembako</NavButton>
        </>
      )}

      {access === 'A' && (
        <>
          <NavButton link={'/dashboard'}>Dashboard</NavButton>
          <Dropdwon text={'Laporan'}>
            <NavButton link={'/laporan/masuk'}>Laporan Masuk</NavButton>
            <NavButton link={'/laporan/keluar'}>Laporan Keluar</NavButton>
          </Dropdwon>
        </>
      )}
    </aside>
  );
};

Sidebar.propTypes = {
  access: PropTypes.any,
};

export default Sidebar;
