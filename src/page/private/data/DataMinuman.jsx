import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const DataMinuman = ({ title }) => {
  const location = useLocation();

  return (
    // <div className='w-full overflow-x-auto'>
    <table>
      <thead>
        {title && (
          <tr>
            <th colSpan={'100%'}>MINUMAN</th>
          </tr>
        )}
        <tr>
          <th>No</th>
          <th>Aksi</th>
          <th>Stock</th>
          <th>Nama</th>
          {location.pathname !== '/dashboard' && (
            <>
              <th>Harga</th>
              <th>tanggal</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Edit</td>
          <td>Stok</td>
          <td>Sapi</td>
          {location.pathname !== '/dashboard' && (
            <>
              <td>91111</td>
              <td>12 juni 2111</td>
            </>
          )}
        </tr>
      </tbody>
    </table>
    // </div>
  );
};

DataMinuman.propTypes = {
  title: PropTypes.any,
};

export default DataMinuman;
