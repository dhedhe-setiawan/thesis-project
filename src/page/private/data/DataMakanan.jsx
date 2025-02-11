import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from '../../../components/button/Button';

const DataMakanan = ({ title }) => {
  const location = useLocation();

  return (
    // <div className='w-full overflow-x-auto'>
    <table>
      <thead>
        {title && (
          <tr>
            <th colSpan={'100%'}>MAKANAN</th>
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
          <td>
            <span className='flex gap-2 '>
              <Button className={'bg-blue-500 text-light'}>
                <FontAwesomeIcon icon={'fas fa-plus'} />
              </Button>

              <Button className={'bg-blue-500 text-light'}>
                <FontAwesomeIcon icon={'fas fa-pencil'} />
              </Button>

              <Button className={'bg-brand text-light'}>
                <FontAwesomeIcon icon={'fas fa-trash'} />
              </Button>
            </span>
          </td>
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

DataMakanan.propTypes = {
  title: PropTypes.any,
};

export default DataMakanan;
